"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    heap?: any;
  }
}

// Initialize Heap with the official pattern and lightweight stubs
export function HeapProvider() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_HEAP_ID;

    if (!appId) {
      console.warn(
        "Heap App ID not configured. Set NEXT_PUBLIC_HEAP_ID environment variable.",
      );
      return;
    }

    // Avoid re-initializing
    if (typeof window === "undefined") return;

    window.heap = window.heap || [];

    // If load already exists, we assume heap was initialized
    if ((window.heap as any).load) {
      try {
        (window.heap as any).load(appId);
      } catch (e) {
        // ignore
      }
      return;
    }

    // Create the load function which injects the real script and sets up stubs
    (window.heap as any).load = function (e: string, t?: Record<string, any>) {
      (window.heap as any).appid = e;
      (window.heap as any).config = t = t || {};

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode!.insertBefore(script, firstScript);

      const methods = [
        "addEventProperties",
        "addUserProperties",
        "clearEventProperties",
        "identify",
        "resetIdentity",
        "removeEventProperty",
        "setEventProperties",
        "track",
        "unsetEventProperty",
      ];

      function makeStub(method: string) {
        return function () {
          // @ts-ignore - we intentionally allow pushing arbitrary args
          (window.heap || []).push(
            [method].concat(Array.prototype.slice.call(arguments, 0)),
          );
        };
      }

      for (let i = 0; i < methods.length; i++) {
        (window.heap as any)[methods[i]] = makeStub(methods[i]);
      }
    };

    // Call load immediately
    try {
      (window.heap as any).load(appId);
    } catch (err) {
      console.error("Heap load error:", err);
    }

    // Optionally listen for script load errors
    const selector = `script[src=\"https://cdn.heapanalytics.com/js/heap-${appId}.js\"]`;
    const scriptEl = document.querySelector(
      selector,
    ) as HTMLScriptElement | null;
    if (scriptEl) {
      scriptEl.onerror = (error) => {
        console.error("Error loading Heap Analytics script:", error);
      };
    }

    // no cleanup: heap library persists across SPA navigations
  }, []);

  return null;
}

// Helper to identify a user and add user properties safely
export function identifyHeapUser(user: {
  email?: string;
  name?: string;
  plan?: string;
  country?: string;
  phone?: string;
}) {
  if (typeof window === "undefined") return;
  if (!window.heap) return;

  try {
    const nameSplit = (user?.name || "").split(" ");
    const firstname = nameSplit[0] || "";
    const lastname = nameSplit[nameSplit.length - 1] || "";

    if (user?.email) {
      (window.heap as any).identify(user.email);
    }

    (window.heap as any).addUserProperties({
      email: user?.email,
      fullname: user?.name,
      firstname,
      lastname,
      plan: user?.plan,
      country: user?.country,
      phone: user?.phone,
    });
  } catch (error) {
    console.error("Heap Identity Error:", error);
  }
}

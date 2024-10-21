"use client";

import { useEffect } from "react";
import { meet } from "@googleworkspace/meet-addons/meet.addons";

export default function Page() {
  /**
   * Prepares the Add-on Main Stage Client, which signals that the add-on
   * has successfully launched in the main stage.
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const session = await meet.addon.createAddonSession({
          cloudProjectNumber:
            "884305326443-g3fb16qljph6d5f6sj7psv3275m2n2ut.apps.googleusercontent.com",
        });
        await session.createMainStageClient();
      })();
    }
  }, []);

  return (
    <>
      <div>
        This is the Add-on Main Stage. Everyone in the call can see this.
      </div>
      <div>Hello, world!</div>
    </>
  );
}

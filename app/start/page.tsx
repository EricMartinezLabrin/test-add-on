"use client";

import { useEffect } from "react";
import { meet } from "@googleworkspace/meet-addons/meet.addons";

export default function Page() {
  /**
   * Prepares the Add-on Main Stage Client, which signals that the add-on
   * has successfully launched in the main stage.
   */
  useEffect(() => {
    (async () => {
      const session = await meet.addon.createAddonSession({
        cloudProjectNumber: "884305326443",
      });
      await session.createMainStageClient();
    })();
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

import { Outliner } from "./Outliner";
import { Header } from "./Header";
import { useOwlbearStoreSync } from "./useOwlbearStoreSync";
import { useOwlbearStore } from "./useOwlbearStore";

export function App() {
  useOwlbearStoreSync();

  const sceneReady = useOwlbearStore((state) => state.sceneReady);

  const role = useOwlbearStore((state) => state.role);

  if (!sceneReady) {
    return (
      <Header title="Outliner" subtitle="Open a scene to use the outliner" />
    );
  } else if (role !== "GM") {
    return (
      <Header title="Outliner" subtitle="Must have GM access to use (this fork of) outliner." />
    );
  } else {
    return <Outliner />;
  }
}

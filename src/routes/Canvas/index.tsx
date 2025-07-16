import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

export const Canvas = () => {
  return (
    <div className="fixed inset-0">
      <Tldraw persistenceKey="canvas" />
    </div>
  );
};

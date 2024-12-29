import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import HighlightExtension from "../HighlightExtension";

const App = () => {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, HighlightExtension],
    content: "<p>Hello World!</p>",
  });

  const applyHighlight = (color) => {
    editor.chain().focus().setHighlight(color).run();
  };

  const removeHighlight = () => {
    editor.chain().focus().unsetHighlight().run();
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Tiptap Editor</h1>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => applyHighlight("#FFFF00")}
          className="px-4 py-2 text-black bg-yellow-400 rounded shadow hover:bg-yellow-500"
        >
          Highlight Yellow
        </button>
        <button
          onClick={() => applyHighlight("#FF0000")}
          className="px-4 py-2 text-white bg-red-400 rounded shadow hover:bg-red-500"
        >
          Highlight Red
        </button>
        <button
          onClick={removeHighlight}
          className="px-4 py-2 text-white bg-gray-400 rounded shadow hover:bg-gray-500"
        >
          Remove Highlight
        </button>
      </div>
      <div className="w-full max-w-4xl p-4 bg-white rounded shadow-md">
        <EditorContent editor={editor} className="ProseMirror" />
      </div>
    </div>
  );
};

export default App;

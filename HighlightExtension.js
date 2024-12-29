import { Extension } from '@tiptap/core';

const HighlightExtension = Extension.create({
  name: 'highlight',

  addOptions() {
    return {
      color: '#FFFF00', // Default highlight color
    };
  },

  addCommands() {
    return {
      setHighlight: (color) => ({ commands }) => {
        return commands.setMark('textStyle', { backgroundColor: color });
      },
      unsetHighlight: () => ({ commands }) => {
        return commands.unsetMark('textStyle');
      },
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: ['textStyle'],
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (element) =>
              element.style.backgroundColor || null,
            renderHTML: (attributes) => {
              if (!attributes.backgroundColor) {
                return {};
              }

              return {
                style: `background-color: ${attributes.backgroundColor}`,
              };
            },
          },
        },
      },
    ];
  },
});

export default HighlightExtension;

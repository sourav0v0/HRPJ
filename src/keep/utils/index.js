export const splitNotesByPinnedStatus = (notes) => {
  if (notes.length == 0) {
    return { pinned: [], notPinned: [] };
  }
  return notes.reduce(
    (acc, item, index) => {
      if (item.isPinned) {
        acc.pinned.push({ ...item });
      } else {
        acc.notPinned.push(item);
      }
      return acc;
    },
    { pinned: [], notPinned: [] }
  );
};

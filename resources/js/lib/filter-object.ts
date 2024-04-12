export default function filterObjectsById(objects: {}, idToFilter: number | undefined) {
  //@ts-expect-error
  return objects.filter(obj => {
    if (obj.id === idToFilter) {
      return false; // Exclude object with matching id
    }
    if (obj.children && obj.children.length > 0) {
      // Recursively filter children
      obj.children = filterObjectsById(obj.children, idToFilter);
    }
    return true; // Include object if not filtered
  });
}

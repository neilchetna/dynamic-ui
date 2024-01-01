const schemaBuilder = (data: any): any => {
  if (Array.isArray(data)) {
    data = data.length > 0 ? [schemaBuilder(data[0])] : [];
    return data;
  }

  if (typeof data === "object") {
    Object.keys(data).forEach(
      (item) => (data[item] = schemaBuilder(data[item]))
    );
    return data;
  }

  return (data = typeof data);
};

export default schemaBuilder;

const convertForSelect = (data: any) => {
  return data.map((item: any) => {
    return { value: item.id.toString(), label: item.name.en }
  })
}

export default convertForSelect

async function iconSwitch(records, categories) {
  await records.forEach(record => {
    categories.forEach(category => {
      if (record.category === category.name) {
        record.category = category.icon
      }
    })
  })
}

module.exports = iconSwitch
function iconSwitch(records, categories) {
  records.forEach(record => {
    categories.forEach(category => {
      if (record.category === category.name) {
        record.category = category.icon
      }
    })
  })
}

module.exports = iconSwitch
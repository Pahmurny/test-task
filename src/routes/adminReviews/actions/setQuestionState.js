import updateReviewValue from 'routes/adminReviews/actions/updateReviewValue'

export default (id, isEdit = true) => (dispatch, getState) => {
  const { reviews: { onEdit } } = getState()
  let newOnEdit = onEdit ? [...onEdit] : []

  if (isEdit) {
    if (!newOnEdit.includes(id)) {
      newOnEdit.push(id)
    }
  } else {
    newOnEdit = newOnEdit.filter(oId => oId !== id)
  }


  dispatch(updateReviewValue('onEdit', [...newOnEdit]))
}
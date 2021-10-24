import Api from './Api'

export default {
  getAllMedicaments () {
    return Api().get('medicaments')
  }
}

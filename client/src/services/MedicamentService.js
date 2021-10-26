import Api from './Api'

export default {
  getAllMedicaments () {
    return Api().get('medicaments')
  },

  createMedicament(medicament){
    return Api().post('addMed',medicament)
  }
}

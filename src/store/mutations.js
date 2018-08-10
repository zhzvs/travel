export default  {
    changeCity(state, city) {
        try {
            localStorage.city = city;
            state.city = city;
        } catch (e) {}
        
    }
}
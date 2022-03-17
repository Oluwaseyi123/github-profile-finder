class Github{
    constructor(){
        this.client_id='310b521bf26a26c8214b';
        this.client_secret='53785ef44b9c269d034587170fea1cbeabe5e46b'
    }
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profileData=await profileResponse.json()

        return{
            profile: profileData
        }
    }
}
import  AsyncStorage  from "@react-native-async-storage/async-storage";

export const setLng = (data) =>{
    data = JSON.stringify(data)
    return AsyncStorage.setItem('language',data)
}

export const getLng = (data) =>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem('language').then(data=>{
            resolve(JSON.parse(data))
        })
    })
}
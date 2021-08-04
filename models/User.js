const mongoose = require('mongoose'); 

// 모델 스키마 만들기 
const userSchema = mongoose.Schema({
    name  :  {
        type :String, 
        maxlength : 50

    }, 
    email : {
        type : String, 
        trim : true, // uzenn kss@naver.com 에서 띄어쓰기를 없애준다.
        unique : 1 // 똑같은 email을 쓰지 못하게 한다. 
    },
    password : {
        type : String, 
        minlength : 5
    }, 
    lastname : {
        type : String, 
        maxlength : 50
    }, 
    role : {
        type : Number, // 관리자 or 일반 사용자 
        default : 0
    }, 
    image : String, 
    token : {
        type : String
    }, 
    tokenExp : {
        type : Number // 토큰 사용 기간 
    }
})

// 'User' 스키마를 모델로 만든다. 
const User = mongoose.model('User', userSchema)

module.exports = {User} 
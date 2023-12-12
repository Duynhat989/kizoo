const langVietNamese = async () => {

} 

const langEnglish = async () => {
    
} 
const analysisKeyword = async (comment,language = 'VN') => {
    if(language == 'VN'){
        return langVietNamese(comment)
    }else{
        return langEnglish(comment)
    }
} 
module.exports = {
    analysisKeyword
};
  
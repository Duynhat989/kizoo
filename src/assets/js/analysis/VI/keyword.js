//#region mẫu dữ liệu có sẵn
//format example content|numver sensitive|numver conversation|numver advertisement|numver Conmmet_Walk|numver Offensive|topic;
let sensitive = []
sensitive.push('vú')
sensitive.push('đéo')
sensitive.push('đít')
sensitive.push('sờ')
sensitive.push('bóp')
sensitive.push('xxx')
sensitive.push('cởi')
sensitive.push('khiêu dâm')
sensitive.push('khoe hàng')
sensitive.push('Gạ tình')
sensitive.push('link')
sensitive.push('sex')
sensitive.push('con')
var conversation =
  "khỏe chứ|oki|xinh|cảm ơn|đồng ý|chơi game|chém gió|làm quen|vui vẻ"; //Lưu trữ tại chỗ
var advertisement =
  "tham gia|mời|khuyến mãi|combo|dịch vụ|tăng|giảm giá|liên hệ|sỉ|lẻ|hỗ trợ|facebook|liên hệ|tăng tương tác|Marketing|uy tín|giá cả"; //Lưu trữ tại chỗ
var Conmmet_Walk =
  "Chấm|Tương tác|fan cứng|xin in4|acp|thả tim|xin chào|làm quen|tag|câu like|hóng"; //Lưu trữ tại chỗ
var Offensive = "cay cú|ngu|điên|não|mất dạy|thần kinh|xấu|cmm|dcm|đcm"; //Lưu trữ tại chỗ

const keyword_list = async () => {
    let lst = {
        sensitive:sensitive,
        conversation:conversation,
        advertisement:advertisement,
        Conmmet_Walk:Conmmet_Walk,
        Offensive:Offensive,
    }
    return lst
}

module.exports = {
    keyword_list
}
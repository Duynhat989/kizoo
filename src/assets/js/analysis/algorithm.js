//VN
import { example } from '../analysis/VI/contain_keywords' 
import { keyword_list } from '../analysis/VI/keyword' 

//VN
import { example_en } from '../analysis/EN/contain_keywords' 
import { keyword_list_en } from '../analysis/EN/keyword' 




const prepare = (language) => {

}



const keyword_count = async (comment, word) => {
  return comment.split(word).length - 1;
};

const keyword_counts = async (comment, words) => {
  const word = words.split("|");
  var numberWord = 0;
  for (var i = 0, iLen = word.length; i < iLen; i++) {
    numberWord = numberWord + keyword_count(comment, word[i]);
  }
  return numberWord;
};

const get_distance = async (comment, Example) => {
  var CmtScan = new Object();
  CmtScan.sensitive = keyword_counts(comment, sensitive);
  CmtScan.conversation = keyword_counts(comment, conversation);
  CmtScan.advertisement = keyword_counts(comment, advertisement);
  CmtScan.Conmmet_Walk = keyword_counts(comment, Conmmet_Walk);
  CmtScan.Offensive = keyword_counts(comment, Offensive);
  //hàm tính khoảng cách từ comment mới đến mẫu
  var result =
    Math.sqrt(
      Math.pow(Example.sensitive - CmtScan.sensitive, 2) +
        Math.pow(Example.conversation - CmtScan.conversation, 2) +
        Math.pow(Example.advertisement - CmtScan.advertisement, 2) +
        Math.pow(Example.Conmmet_Walk - CmtScan.Conmmet_Walk, 2) +
        Math.pow(Example.Offensive - CmtScan.Offensive, 2)
    ) * 100;
  return result;
};
const add_content_to_object = async (strExample) => {
  const words = strExample.split("|");
  var cmtEx = new Object();
  cmtEx.sensitive = words[1];
  cmtEx.conversation = words[2];
  cmtEx.advertisement = words[3];
  cmtEx.Conmmet_Walk = words[4];
  cmtEx.Offensive = words[5];
  cmtEx.topic = words[6];
  return cmtEx;
};
const get_result_new_comment = async (newComt) => {
  var arayResult = [];
  for (var i = 0, iLen = arrayExample.length; i < iLen; i++) {
    var obj = add_content_to_object(arrayExample[i]);
    var Distance = get_distance(newComt, obj);
    //Xét khopangr cách ok
    var objResult = new Object();
    objResult.topic = obj.topic;
    objResult.Distance = Distance;
    arayResult.push(objResult);
  }
  return arayResult;
};
const index = async (comment,language) => {
  await prepare(language);
  var arrayResult = get_result_new_comment(comment);
  console.log(arrayResult);
  //Lọc ra lượt
  //var arrayList = [];
  //trường hợp k = 1;
  var minTopic = 999999999;
  var minObj = new Object();
  for (var i = 0, iLen = arrayResult.length; i < iLen; i++) {
    if (minTopic > arrayResult[i].Distance) {
      console.log(arrayResult[i].Distance);
      minTopic = arrayResult[i].Distance;
      minObj = arrayResult[i];
    }
  }
  //arrayList.push(minObj);
  //Từ đó suy ra chủ đề của comment là
  return minObj.topic;
};
function get_id_topic(values) {
  if (values == "sensitive") {
    return 1;
  }
  if (values == "conversation") {
    return 2;
  }
  if (values == "advertisement") {
    return 3;
  }
  if (values == "Conmmet_Walk") {
    return 4;
  }
  if (values == "Offensive") {
    return 5;
  }
}
module.exports = {
  index,
};

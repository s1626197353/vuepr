// let data=(data)=>{
// 	let d=new Data(data);
// 	// d.setTime(data);
// 	return 
// }
function date(data) {
	data = new Date(data);
	return data.getFullYear() + "年"+ //不够两位字符补零
		((data.getMonth() + 1)).toString().padStart(2, "0") + "月" +
		(data.getDate()).toString().padStart(2, "0") + "日  " +
		(data.getHours()).toString().padStart(2, "0") + ":" +
		(data.getMinutes()).toString().padStart(2, "0") + ":" +
		(data.getSeconds()).toString().padStart(2, "0");
	// return str;
}
export default date;
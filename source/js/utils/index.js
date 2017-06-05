export const getQueryValue = function(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

export const changeURLPar = function(par, par_value) {
	let pattern = par+'=([^&]*)';
	let replaceText = par+'='+par_value;
	let destiny = window.location.href;
	if (destiny.match(pattern)) {
		let tmp = '/\\'+par+'=[^&]*/';
		tmp = destiny.replace(eval(tmp), replaceText);
		return tmp;
	} else {
		if (destiny.match('[\?]')) {
			return destiny+'&'+ replaceText;
		} else {
			return destiny+'?'+replaceText;
		}
	}
	return destiny+'\n'+par+'\n'+par_value;
}
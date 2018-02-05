import history from './history';
export function requestStatus(res) {
	if (res.code === 1) {
		return res.msg;
	} else if (res.code === 10) {
		history.push('/login');
		return '登录信息已过期，请重新登录';
	} else if (res.code === 100) {
		return '您的账号在另一台设备登录，请重新登录';
	} else if (res.status === 500) {
		history.push('/login');
		return '请先登录您的账号，谢谢';
	} else {
		return 'success';
	}
}
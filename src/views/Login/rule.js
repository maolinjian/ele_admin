export const passwordValidate = () => {
  return (rule, value, callback) => {
    // 获取到输入的值做验证 最少是6位
    if (value.length < 6) {
      callback(new Error('密码最少是6位'))
    } else {
      callback()
    }
  }
}

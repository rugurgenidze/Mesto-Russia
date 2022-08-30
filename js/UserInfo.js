"use strict";

class UserInfo {
  constructor(nick, self) {
    this.nick = nick;
    this.self = self;
  }
  setUserInfo(name, job) {
    this.nick.value = name.textContent;
    this.self.value = job.textContent;
  }
  updateUserInfo(name, job) {
    name.textContent = this.nick.value;
    job.textContent = this.self.value;
  }
}

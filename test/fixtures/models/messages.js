/**
 * Created by Liam Vovk on 2017-05-14.
 */

module.exports.message = {
    _chat_id: '5911261c07a02e3d3c59e639',
    _user_from_id: '590f5c20d96cd4eccb38d6fc',
    _user_to_id: '590f5c90f3ba9c0d5cda6bad',
    message: 'The one message to rule them all.'
}

module.exports.invalidMessages = {
  noChatId: {
    _user_from_id: '590f5c20d96cd4eccb38d6fc',
    _user_to_id: '590f5c90f3ba9c0d5cda6bad',
    message: 'The one message to rule them all.'
  },
  noUserFromId: {
    _chat_id: '5911261c07a02e3d3c59e639',
    _user_to_id: '590f5c90f3ba9c0d5cda6bad',
    message: 'The one message to rule them all.'
  },
  noUserToId: {
    _chat_id: '5911261c07a02e3d3c59e639',
    _user_from_id: '590f5c20d96cd4eccb38d6fc',
    message: 'The one message to rule them all.'
  }
}
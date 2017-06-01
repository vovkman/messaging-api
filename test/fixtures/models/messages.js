/**
 * Created by Liam Vovk on 2017-05-14.
 */

module.exports.message = {
    _chat_id: '591a7c72b1831cc12dae2fdd',
    _user_from_id: '5913af934c9b0944983ad3e3',
    message: 'The one message to rule them all.'
}

module.exports.messageId = "5924de8de24c4329eaafa3fe"
module.exports.invalidMessageId = "5924e5195d821f1e05"

module.exports.updateMessageViews = { messageIds: '["5924e519bd04615d821f1e05"]' }

module.exports.updateMessagesViews = {
  messageIds: '["5924e519bd04615d821f1e05", "592b7a336680b526378d2765", "592b7921c813d22407e14386"]'
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
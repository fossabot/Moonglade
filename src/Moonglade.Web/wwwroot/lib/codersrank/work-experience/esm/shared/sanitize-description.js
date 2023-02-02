export var sanitizeDescription = function sanitizeDescription(html) {
  if (html === void 0) {
    html = '';
  }

  return (html || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
};
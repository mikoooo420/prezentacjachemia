function toggleSection(header) {
    var article = header.nextElementSibling;
    article.style.display = (article.style.display === 'none' || article.style.display === '') ? 'block' : 'none';
  }
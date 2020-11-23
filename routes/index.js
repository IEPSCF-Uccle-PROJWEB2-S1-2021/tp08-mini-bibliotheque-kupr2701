const express = require('express');
const router = new express.Router();
const books = [
  {
    author: 'Guillaume Debré',
    title: 'affaire Lafayette',
    category: 'roman historique',
  },
  {
    author: 'Gérald Messadié',
    title: 'La conspiration Jeanne dArc',
    category: 'roman historique',
  },
  {
    author: 'J.R.R. Tolkien',
    title: 'Le Seigneur des anneaux',
    category: 'fantasy',
  },
  {
    author: 'Michael Ende',
    title: 'LHistoire sans fin',
    category: 'fantasy',
  },
  {
    author: 'Andrzej Sapkowski',
    title: 'Le Sorceleur',
    category: 'fantasy',
  },
  {
    author: 'George R. R. Martin',
    title: 'Le Trône de fer',
    category: 'fantasy',
  },
  {
    author: 'Hervé Bazin',
    title: 'Vipère au poing',
    category: 'autobiographie',
  },
  {
    author: ' Marie Cardinal',
    title: 'Les mots pour le dire',
    category: 'autobiographie',
  },
  {
    author: 'Giacomo Casanova',
    title: 'Histoire de ma vie',
    category: 'autobiographie',
  },
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get ('/books/search' , (rep,res,next) => {
    const categories =[];
for (let i=0; i<books.length; ++i){
  const book = books[i];
  const category = book.category;
  if(!(categories.includes(category))){
    categories.push(category);
  }
}
  res.render('librarysearch' , { title :  'recherche des livres' , categories: categories});
});

router.post ('/books/list' , (rep, res , next)=>{
  const category = '';
 const bookfounds = books.filter((book) =>{
   book.category === category;
 });
  res.render('library' , { title : 'livre trouvé' , book : bookfounds});
});
module.exports = router;


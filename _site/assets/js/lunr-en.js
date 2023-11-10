var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: "Grand Opening of KID Museum",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "What is an Astronomer?",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "Redshift Wrangler",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 2
      })
      
    
      this.add({
          title: "Long Night of Arts & Innovation",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 3
      })
      
    
  
    
    
      this.add({
          title: "Example Content",
          excerpt: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia...",
          categories: ["example"],
          tags: [],
          id: 4
      })
      
    
      this.add({
          title: "Example Content II",
          excerpt: "There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project. There...",
          categories: ["example"],
          tags: [],
          id: 5
      })
      
    
      this.add({
          title: "Example Content III",
          excerpt: "Hydejack offers a few additional features to markup your markdown. Don’t worry, these are merely CSS classes added with kramdown’s...",
          categories: ["example"],
          tags: [],
          id: 6
      })
      
    
      this.add({
          title: "Introducing Hydejack 9",
          excerpt: "Version 9 is the most complete version of Hydejack yet. Modernized design, big headlines, big new features: Built-In Search, Sticky...",
          categories: ["example"],
          tags: [],
          id: 7
      })
      
    
  
    
    
  
    
    
      this.add({
          title: "Emission Line Luminosity and Stellar Mass Functions up to z ~ 5",
          excerpt: "I led several studies investigating the key statistical properties of Hα, [OIII], and [OII] emission line galaxies from \\(z \\sim...",
          categories: [],
          tags: [],
          id: 8
      })
      
    
      this.add({
          title: "Cosmic Star Formation History & Stellar Mass Build-up",
          excerpt: "The cosmic star formation rate density (SFRD) evolution is one of the most fundamental property in all of extragalactic astrophysics...",
          categories: [],
          tags: [],
          id: 9
      })
      
    
      this.add({
          title: "Star Forming Galaxies and Host Dark Matter Halos",
          excerpt: "Spherical overdense regions known as dark matter halos (DMHs) massive enough (have deep gravitational potentials) to facilitate cold gas accretion...",
          categories: [],
          tags: [],
          id: 10
      })
      
    
      this.add({
          title: "Extreme Emission Line Galaxies at z ~ 0.4 - 2.2 and Equivalent Width Evolution",
          excerpt: "EELGs are unique subsets of bursty, star-forming galaxies characterized by high equivalent widths (EWs) and may be important ionizing contributors...",
          categories: [],
          tags: [],
          id: 11
      })
      
    
      this.add({
          title: "Extreme Emission Line Galaxies at Epoch of Reionization",
          excerpt: "I am leading a study using COSMOS-Web JWST/NIRCam imaging to investigate EELGs at \\(z \\sim 6.7 - 9\\) identified by...",
          categories: [],
          tags: [],
          id: 12
      })
      
    
      this.add({
          title: "COSMOS Spectroscopic Redshift Compilation",
          excerpt: "I am leading the COSMOS spec-z compilation: a collection of all “published” spectroscopic redshifts. This is a collaborative effort between...",
          categories: [],
          tags: [],
          id: 13
      })
      
    
      this.add({
          title: "Public COSMOS Spectroscopic Archive",
          excerpt: "It is an exciting time to be part of observational extragalactic astrophysics because we have all sorts of new toys...",
          categories: [],
          tags: [],
          id: 14
      })
      
    
  
    
    
      this.add({
          title: "COSMOS-Web",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 15
      })
      
    
      this.add({
          title: "HiZELS",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 16
      })
      
    
      this.add({
          title: "LAGER",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 17
      })
      
    
      this.add({
          title: "SC4K",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 18
      })
      
    
  
    
    
      this.add({
          title: "astroTopics",
          excerpt: "\n",
          categories: [],
          tags: [],
          id: 19
      })
      
    
      this.add({
          title: "History of the Universe",
          excerpt: "Professor: Gillian Wilson Course ID: PHYS005 Description: An introduction to “The Big Bang” model and its observational tests. Topics include...",
          categories: [],
          tags: [],
          id: 20
      })
      
    
      this.add({
          title: "Origins",
          excerpt: "Professor: Bahram Mobasher Course ID: PHYS037 Description: Explores the most fundamental questions in cosmology, physics, and chemical sciences through their...",
          categories: [],
          tags: [],
          id: 21
      })
      
    
      this.add({
          title: "The Violent Universe",
          excerpt: "Professor: Gaby Canalizo Course ID: PHYS006 Description: An introduction to violent phenomena that power the universe, specifically phenomena that illustrate...",
          categories: [],
          tags: [],
          id: 22
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Grand Opening of KID Museum",
        "url": "http://localhost:4000/outreach/kid_museum/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "What is an Astronomer?",
        "url": "http://localhost:4000/outreach/preschool_irvine/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Redshift Wrangler",
        "url": "http://localhost:4000/outreach/redshift_wrangler/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Long Night of Arts & Innovation",
        "url": "http://localhost:4000/outreach/riverside_downtown/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Example Content",
        "url": "http://localhost:4000/example/2012-02-07-example-content/",
        "excerpt": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Example Content II",
        "url": "http://localhost:4000/example/2017-11-23-example-content-ii/",
        "excerpt": "There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project. There...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Example Content III",
        "url": "http://localhost:4000/example/2018-06-01-example-content-iii/",
        "excerpt": "Hydejack offers a few additional features to markup your markdown. Don’t worry, these are merely CSS classes added with kramdown’s...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Introducing Hydejack 9",
        "url": "http://localhost:4000/example/2020-07-03-introducing-hydejack-9/",
        "excerpt": "Version 9 is the most complete version of Hydejack yet. Modernized design, big headlines, big new features: Built-In Search, Sticky...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
  
    
    
    
      
      {
        "title": "Emission Line Luminosity and Stellar Mass Functions up to z ~ 5",
        "url": "http://localhost:4000/research/LFs_EW_SMFs/",
        "excerpt": "I led several studies investigating the key statistical properties of Hα, [OIII], and [OII] emission line galaxies from \\(z \\sim...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Cosmic Star Formation History & Stellar Mass Build-up",
        "url": "http://localhost:4000/research/SFRD/",
        "excerpt": "The cosmic star formation rate density (SFRD) evolution is one of the most fundamental property in all of extragalactic astrophysics...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Star Forming Galaxies and Host Dark Matter Halos",
        "url": "http://localhost:4000/research/Clustering/",
        "excerpt": "Spherical overdense regions known as dark matter halos (DMHs) massive enough (have deep gravitational potentials) to facilitate cold gas accretion...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Extreme Emission Line Galaxies at z ~ 0.4 - 2.2 and Equivalent Width Evolution",
        "url": "http://localhost:4000/research/EELGs/",
        "excerpt": "EELGs are unique subsets of bursty, star-forming galaxies characterized by high equivalent widths (EWs) and may be important ionizing contributors...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Extreme Emission Line Galaxies at Epoch of Reionization",
        "url": "http://localhost:4000/research/EELGS_CWeb/",
        "excerpt": "I am leading a study using COSMOS-Web JWST/NIRCam imaging to investigate EELGs at \\(z \\sim 6.7 - 9\\) identified by...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "COSMOS Spectroscopic Redshift Compilation",
        "url": "http://localhost:4000/research/COSMOS_specz_comp/",
        "excerpt": "I am leading the COSMOS spec-z compilation: a collection of all “published” spectroscopic redshifts. This is a collaborative effort between...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Public COSMOS Spectroscopic Archive",
        "url": "http://localhost:4000/research/COSMOS_spec_archive/",
        "excerpt": "It is an exciting time to be part of observational extragalactic astrophysics because we have all sorts of new toys...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "COSMOS-Web",
        "url": "http://localhost:4000/surveys/COSMOSWeb/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "HiZELS",
        "url": "http://localhost:4000/surveys/HiZELS/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "LAGER",
        "url": "http://localhost:4000/surveys/LAGER/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SC4K",
        "url": "http://localhost:4000/surveys/SC4K/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "astroTopics",
        "url": "http://localhost:4000/teaching_mentorship/astroTopics/",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "History of the Universe",
        "url": "http://localhost:4000/teaching_mentorship/history_of_the_universe/",
        "excerpt": "Professor: Gillian Wilson Course ID: PHYS005 Description: An introduction to “The Big Bang” model and its observational tests. Topics include...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Origins",
        "url": "http://localhost:4000/teaching_mentorship/origins/",
        "excerpt": "Professor: Bahram Mobasher Course ID: PHYS037 Description: Explores the most fundamental questions in cosmology, physics, and chemical sciences through their...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "The Violent Universe",
        "url": "http://localhost:4000/teaching_mentorship/the_violent_universe/",
        "excerpt": "Professor: Gaby Canalizo Course ID: PHYS006 Description: An introduction to violent phenomena that power the universe, specifically phenomena that illustrate...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});

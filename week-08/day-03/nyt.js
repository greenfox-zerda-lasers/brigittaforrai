var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ecf5a7de7cc04cb2b96621ac0933ae26&q=moon-landing-by-apollo-11", true)
xhr.send()

xhr.onreadystatechange = ready

var body = document.querySelector("body")

function ready () {
  
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var times = JSON.parse(xhr.response)
      console.log(times)
      console.log(times.response.docs[0].headline.main)


      for (var i = 0; i < times.response.docs.length; i++) {
        var list = document.createElement("ul")
        var headline = document.createElement("li")
        headline.textContent = "Headline: " + times.response.docs[i].headline.main
        var snippet = document.createElement("li")
        snippet.textContent = "Snippet: " + times.response.docs[i].snippet
        var date = document.createElement("li")
        date.textContent = "Published: " + times.response.docs[i].pub_date
        var linkLi = document.createElement("li")
        linkLi.textContent = "Link: "
        var link = document.createElement("a")
        link.textContent = times.response.docs[i].web_url
        link.href = times.response.docs[i].web_url
        body.appendChild(list)
        list.appendChild(headline)
        list.appendChild(snippet)
        list.appendChild(date)
        list.appendChild(linkLi)
        linkLi.appendChild(link)


      }
  }
}

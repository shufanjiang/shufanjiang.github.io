---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: features
  #   content:
  #     title: Skills
  #     items:
  #       - name: R
  #         description: 90%
  #         icon: r-project
  #         icon_pack: fab
  #       - name: Statistics
  #         description: 100%
  #         icon: chart-line
  #         icon_pack: fas
  #       - name: Photography
  #         description: 10%
  #         icon: camera-retro
  #         icon_pack: fas
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: featured
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card 
  - bloc: markdown
    id: publications
    content:
      title: Publications
      subtitle: ""
      text: |-
        Please check out the full list of publications including the PDF files of most of them on <a href="https://scholar.google.fr/citations?user=4spgiPMAAAAJ&hl=fr" target="_blank">Google Scholar</a>, <a href="https://dblp.org/pid/265/2380.html" target="_blank">dblp</a> or <a href="https://hal.science/search/index/q/*/authIdHal_s/shufan-jiang" target="_blank">hal</a>.

        You could download ChouBERT models from <a href="https://huggingface.co/ChouBERT" target="_blank">Huggingface</a>.
    design:
      columns: "2"  
  - block: markdown
    id: talks
    content:
      title: Events & Talks
      # filters:
      #   folders:
      #     - event
      text: |-
        Invited talk at the LIP6 DB seminar: Integrating Textural Data towards Crowdsensing Natural Hazards in Agriculture (20minutes), Sorbonne Université, 16 May, 2023 

        Workshop: Agricultural risks detection from Twitter, <a href="https://microandbig2023.sciencesconf.org" target="_blank">École Thématique Micro and Big 2013</a>, 26 Jan, 2023 <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://drive.google.com/file/d/1Yl4MDemYwD8qnTpVk3pTPDYUhfsvonLg/view?usp=sharing" target="_blank" rel="noopener">Slides & Code</a> 

        PhD defense: Integrating Textural Data towards Crowdsensing Natural Hazards in Agriculture, ISEP Paris, 14 Dec, 2022 <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://docs.google.com/presentation/d/1--9yqcSC6JvsJg_eArL37Wo6L7VDJA9KbRt8Y7q0edc/export?format=pdf" target="_blank" rel="noopener">Slides</a>


    design:
      columns: '2'
      view: compact    
  - bloc: markdown
    id: teaching
    content:
      title: Teaching
      subtitle: ""
      text: |-
          Workshop <a href="https://harrycovert.notion.site/DMDM-2023-Collective-notes-and-resources-6ded751467e84cbda21c32342690ee5f?pvs=4" target="_blank">Words for Environmental Woes</a>, lectures and lab work, CERES, 2023 Spring
        
          Worshop "Transition agroécologique : quels bien (mal)-êtres pour les agriculteurs et les agricultrices ?", co-hosted with <a href="https://ceres.ens.psl.eu/?-robert-corinne-&lang=fr" target="_blank">Corinne Robert</a>, Faustine Honoré and <a href="https://sites.google.com/site/marcfleurbaey/Home" target="_blank">Marc Fleurbaey</a>, CERES, 2023 Spring
          <ul><li>Lecture: Building Twitter Macroscopes for Farmer-centric Studies <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://docs.google.com/presentation/d/1G5H02zmIdfO-SAuLmtYUzEJVHjhB1Ay7aFEBVserTtE/export?format=pdf" target="_blank" rel="noopener">Slides</a> </li></ul>

          Invited talks about AI and Smart Agriculture, as part of the “Artificial Intelligence and Machine Learning” master course, Galatasaray University, 2020 <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://docs.google.com/presentation/d/1BlH1fHkqGMPYOzZa6q0d0qtJ69s96mnw2Er7PeSBTMI/export?format=pdf" target="_blank" rel="noopener">Slides</a>, 2021 <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://docs.google.com/presentation/d/17Ri6aMm1eiaWrjaGZOItfkjpJ4q2R0lCsvPWqt60hBQ/export?format=pdf" target="_blank" rel="noopener">Slides</a> and 2022 <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://docs.google.com/presentation/d/1wJ_4EuqoLTNvs03WqTK5yH0bK6Q12Rhpu6eERC7a8X8/export?format=pdf" target="_blank" rel="noopener">Slides</a>

          Introduction to Ontologies and Semantic Web, lecture, Reims Champagne-Ardenne University, Dec 2020

          Bases de données - INFO0703, lab work, Reims Champagne-Ardenne University,  Dec 2019
    design:
      columns: "2"
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: |-
  #       {{% callout note %}}
  #       Quickly discover relevant content by [filtering publications](./publication/).
  #       {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: true
  #   design:
  #     columns: '2'
  #     view: citation
  - bloc: markdown
    id: services
    content:
      title: Services
      subtitle: ""
      text: |-
          Reviewer for international journals / conferences
          <ul>
            <li>The 4th International Conference on Physics, Mathematics and Statistics (ICPMS2021), Kunming, Chine, May 2021</li>
            <li><a href="https://isepengineering.github.io/TechnologyAndEnvironment21/" target="_blank"> Technology and Environment Workshop'21 </a> at <a href="https://egc2021.sciencesconf.org/" target="_blank">Extraction et Gestion des Connaissances (EGC 2021)</a> conference, Montpellier, France, January 2021</li>
            <li>Wiley, Concurrency and Computation: Practice and Experience (CCPE), November 2020</li>            
          </ul>
    design:
      columns: "2"
  - bloc: markdown
    id: cv
    content:
      title: CV
      subtitle: ""
      text: |-
        Please download my detailed CV <a href="https://docs.google.com/document/d/1a0sjxRcNKbS2qmuREAjYBvvSW68udsc_GbwII0JNNXE/export?format=pdf" target="_blank">here</a>.
        And its French version <a href="https://docs.google.com/document/d/1Jc_p-yzdOh-7amm9SuD6CAdypNex0sVdirdk6An524M/export?format=pdf" target="_blank">here</a>
    design:
      columns: "2"
      view: compact
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text:
      # Contact (add or remove contact options as necessary)
      email: jiang.chou.fan@gmail.com
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      address:
        street: <a href="https://www.di.ens.fr/information" shape="rect" target="_blank">Hauts du DI</a>, 1 (staircase A, 3rd floor), École normale supérieure, Département Informatique, 45 rue d'Ulm
        city: Paris
        postcode: '75005'
        country: France
        directions: 
      # office_hours:
      #   - 'Tuesday 10:00 to 13:00'
      #   - 'Thursday 09:00 to 10:00'
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
  - bloc: markdown
    id: agenda
    content:
      title: Agenda
      subtitle: ""
      text: |-
        <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%2333B679&ctz=Europe%2FBrussels&hl=en_GB&showPrint=0&showCalendars=0&showNav=1&mode=MONTH&src=MmFkMWIyMDZiNDI3MTYwNWQyNzY3OTg3NjY1OTgyYjYyZWEwOTgyNDQxN2IxNzFlNjFiOWU5NzFhN2E4NWE1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161" style="border-width:0" width="800" height="500" frameborder="0" scrolling="no"></iframe>
        <p><small>You might need to deactivate your ad blockers to visulaize the iframe content :-)</small></p>
    design:
      columns: "2"

---

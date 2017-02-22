<div class="value_newsletter">
<div id="newsletterform">
      <div class="wrap">
          <h3>Découvrez et améliorez votre créativité.</h3>
          <p class=small>Recevez chaque samedi matin<bold> 5 articles sur la créativité sélectionnés par nos soins parmi toutes les publications en ligne.</bold> Service gratuit. Vous êtez libre de vous désinscrire lorsque vous le souhaitez. <a href="http://www.elhacedor.soy/newsletter_template/index.html" target="_blank" style="text-decoration:underline" onclick="track('Click-newsletter-log-exemple','Click-newsletter-log-exemple')">Voir un exemple</a></p>
          <form action="<?php echo get_template_directory_uri(); ?>/newsletter_sign_up_send.php" method="post" id="newsletter" name="newsletter">
              <input type="email" name="signup-email" id="signup-email" value="" placeholder="Entrez votre email pour vous abonner"/>
              <input type="submit" value="S'inscrire" name="signup-button" id="signup-button" onclick="track('Click-newsletter-log','Click-newsletter-log')">
              <span class="arrow"></span>
          </form>
          <div id="response"></div>
      </div>
  </div>
</div><!-- value_newsletter -->
        <?php
			$homepageid = 22;
		?>
        <div class="sayhello footer">
            <div class="wrapper clearfix">
                <h3><?php the_field('title_for_footer_box', $homepageid); ?></h3>
                <p><?php the_field('conent_for_footer_box', $homepageid); ?></p>
                <ul>
                    <li>over the phone<span><?php the_field('telephone_number', $homepageid); ?></span></li>
                    <li>by electronic pigeon <span><a href="mailto:<?php the_field('contact_modal_window_email', $homepageid); ?>"><?php the_field('contact_modal_window_email', $homepageid); ?></a></span></li>
                    <li>in person<span><?php the_field('address', $homepageid); ?></span></li>
                    <li>by fax<span>we’re just kidding</span></li>
                </ul>
            </div>
        </div>
        <footer>
			<div class="wrapper clearfix">
                <a class="anchor" href="#top">back to top</a>
                <p>like what you’ve seen? we’d love to add your project to our wall of spectacularness.</p>
                <ul>
                    <li>copyright stuff <span>&copy; <?php echo date( "Y" ); ?> Code96</span></li>
                    <li>privacy matters <span><a href="<?php bloginfo('url'); ?>/privacy-matters/">view the rules</a></span></li>
                    <li>we’re real people <span><?php the_field('telephone_number', $homepageid); ?></span></li>
                    <li>tea, coffee or post? <span><?php the_field('address', $homepageid); ?></span></li>
                    <li>unsociable hours? <span><a href="mailto:<?php the_field('footer_email', $homepageid); ?>"><?php the_field('footer_email', $homepageid); ?></a></span></li>
                </ul>
            </div>
		</footer>
    
        </div> <!-- End of mobileContainer -->
        </div> <!-- End of page -->

  <?php wp_footer(); ?>

</body>
</html>

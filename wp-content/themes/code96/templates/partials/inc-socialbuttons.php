<?php
/**
 * The template used for displaying social sharing buttons
 *
 * @package mattbanks
 * @since mattbanks 2.5
 */
?>
<?php
	$homepageid = 22;
?>
<ul class="share">
    <li><strong>Share</strong></li>
    <li><a target="_blank" href="https://www.facebook.com">Like</a></li>
    <li><a target="_blank" href="https://twitter.com/intent/tweet?text=<?php the_title(); ?>&url=http://code96.co.uk&via=tweetingfrog">Tweet</a></li>
    <li><a href="mailto:<?php the_field('footer_email', $homepageid); ?>?subject=code96">email</a></li>
</ul>

<?php get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main">
    	<aside>
        	aside
        </aside>
        
        <section class="main-content">
        
        	<?php get_template_part( 'templates/partials/content', 'page' ); ?>
            
        </section>

	</section> <!-- /#main -->
<?php endwhile; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

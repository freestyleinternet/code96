<?php get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main" class="about">
    	
        <div class="wrapper">
           
            <aside>
                <h1>process</h1>
            </aside>
            <section class="main-content">
            	<h2><?php the_field('intro_text'); ?></h2>
                <?php if(get_field('download')): ?>
					<?php while(the_repeater_field('download')): ?>
                        <article class="process">
                            <?php if( get_sub_field('featured_image') ): ?><img src="<?php the_sub_field('featured_image'); ?>"   alt="Meet the locals"/><?php endif; ?>
                            <?php the_sub_field('title'); ?>
							   <?php the_sub_field('description'); ?>
                            <?php
								$prop_det_url = get_sub_field('file_to_download');
									if($prop_det_url!=''){ 
							?>
                            <a href="<?php the_sub_field('file_to_download'); ?>" target="_blank"><?php the_sub_field('download_text'); ?></a>
                            <?php } ?>
                        </article>
                    <?php  endwhile; ?>
				<?php endif; ?>
            </section>
		</div>
        
	</section> <!-- /#main -->
<?php endwhile; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

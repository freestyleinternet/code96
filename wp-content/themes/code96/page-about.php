<?php get_header(); ?>
	
<?php while ( have_posts() ) : the_post(); ?>
	<section id="main" role="main" class="about">
    	
        <div class="wrapper">
            <aside>
                <h1><?php the_title(); ?></h1>
            </aside>
            <section class="main-content">
            	<h2><?php the_field('intro_text'); ?></h2>
                <div class="columns">
                	<?php the_content(); ?>
                </div>
            </section>
            
            <aside>
                <h1>downloads</h1>
            </aside>
            <section class="main-content">
            	<h2><?php the_field('intro_text'); ?></h2>
                <?php if(get_field('download')): ?>
					<?php while(the_repeater_field('download')): ?>
                        <article>
                            <?php
								$prop_det_url = get_sub_field('file_to_download');
									if($prop_det_url!=''){ 
							?>
                            <img src="<?php the_sub_field('featured_image'); ?>"   alt="Meet the locals"/>
							<?php } ?>
                            <p><?php the_sub_field('description'); ?></p>
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

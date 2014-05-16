
<div class="panel-content">
            <div>
                <a class="close" href="#" rel="postid">x</a>
                <div id="imageBox" class="col" style="background:#ddd;">
           	    	<img src="<?php bloginfo('template_directory'); ?>/assets/images/project-feature.jpg" alt=""/>
                </div>
                <div class="col last">
                	<h1><a href="#"><?php the_title(); ?></a></h1>
                    <ul id="images-view" class="subnav">
                    	<li><a href="#" data-href="<?php the_field('screen_view_image'); ?>">screen view</a></li>
                        <li><a href="#" data-href="<?php the_field('desktop_view_image'); ?>">desktop</a></li>
                        <li><a href="#" data-href="<?php the_field('tablet_view_image'); ?>">tablet</a></li>
                        <li><a href="#" data-href="<?php the_field('mobile_view_image'); ?>">mobile</a></li>
                    </ul>
                    <p><?php the_field('project_information'); ?></p>
                	<dl class="table-display">
                        <dt>website</dt>
                            <dd><a href="#"><?php the_field('website'); ?></a></dd>
                        <dt>designer</dt>
                            <dd><a href="#"><?php the_field('designer'); ?></a></dd>
                    </dl>
                    <ul class="share">
                        <li><strong>Share</strong></li>
                        <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>">like</a></li>
                        <li><a href="https://twitter.com/intent/tweet?text=<?php the_title(); ?> <?php the_permalink(); ?>&url=YOUR-URL&via=TEFLAcademyUK">tweet</a></li>
                        <li><a href="#">email</a></li>
                    </ul>
                </div>
            </div>
        </div>
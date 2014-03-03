<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title><?php wp_title(''); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
    <!-- For third-generation iPad with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon-144x144-precomposed.png">
    <!-- For iPhone with high-resolution Retina display: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon-114x114-precomposed.png">
    <!-- For first- and second-generation iPad: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon-72x72-precomposed.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" href="<?php echo get_template_directory_uri(); ?>/apple-touch-icon-precomposed.png">
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,600,700' rel='stylesheet' type='text/css'>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<!--[if lt IE 8]>
	    <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
	<![endif]-->
	<?php
		$homepageid = 22;
	?>
    <div id="top"></div>
    <div class="mobileContainer"> 
    	<div id="slidingMenu">
          <div id="slidingMenuContent">
              <ul class="mobilemenu">
					<?php
                            wp_nav_menu(
                                array(
                                'menu'		  => 'main-menu-mobile',
                                'container'       => '',
                                'menu_class'	=> '',
                                'items_wrap' => '%3$s'
                            ));
                        ?>
				</ul>
          </div>
    </div>
     <div id="page">
    <header>
        <div class="wrapper clearfix">
        <a href="javascript:void(0);" class="show-menu-button"></a>
        <ul id="tab">
            <li><img id="arrow" onclick="toggle('box');" src="<?php bloginfo('template_directory'); ?>/assets/images/trigger.png"></li>
        </ul>
        <div id="box" class="hide"> 
            <div id="links">
                <ul class="socialmediamobile">
                    <li><a class="facebook" href="<?php the_field('facebook_page_url', $homepageid); ?>" target="_blank"></a></li>
                    <li><a class="twitter" href="<?php the_field('twitter_handle', $homepageid); ?>" target="_blank"></a></li>
                    <li><a class="google" href="<?php the_field('google+_link', $homepageid); ?>" target="_blank"></a></li>
                    <li><a class="youtube" href="<?php the_field('youtube_channel', $homepageid); ?>" target="_blank"></a></li>
            	</ul>
            </div>
        </div>
			<a class="logo" href="<?php echo home_url( '/' ); ?>"></a>
            <nav>
				<ul>
					<?php
                            wp_nav_menu(
                                array(
                                'menu'		  => 'main-menu',
                                'container'       => '',
                                'menu_class'	=> '',
                                'items_wrap' => '%3$s'
                            ));
                        ?>
                        <li><a type="button" value="Zoom In Modal Window" class="button" data-type="zoomin">say hello</a></li>
				</ul>
            </nav>
            
            <div class="overlay-container">
                <div class="window-container zoomin">
                	<span class="close">X</span>
                    <h3>say hello</h3> 
                    <div class="form-container">
						<?php gravity_form(1, false, false, false, '', true, 12); ?>
                    </div>
                    <div class="footer">
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
            </div>
            
            <div class="cycle-slideshow" 
                data-cycle-fx="scrollHorz" 
                data-cycle-timeout="2000"
                data-cycle-swipe="true"
                data-cycle-slides="> div.slide"
                data-cycle-prev=".prevControl"
                data-cycle-next=".nextControl">
                <?php if( have_rows('slide', $homepageid) ): ?>
					<?php while( have_rows('slide', $homepageid) ): the_row(); ?>
                        <div class="slide">
                            <p><?php the_sub_field('slide_text'); ?></p>
                            <span><?php the_sub_field('slide_small_text'); ?></span>
                        </div>
                	<?php  endwhile; ?>
				<?php endif; ?>
                <div class="cycle-pager"></div>
            </div>
 			<ul class="socialmedia">
            	<li><a class="facebook" href="<?php the_field('facebook_page_url', $homepageid); ?>" target="_blank"></a></li>
                <li><a class="twitter" href="<?php the_field('twitter_handle', $homepageid); ?>" target="_blank"></a></li>
                <li><a class="google" href="<?php the_field('google+_link', $homepageid); ?>" target="_blank"></a></li>
                <li><a class="youtube" href="<?php the_field('youtube_channel', $homepageid); ?>" target="_blank"></a></li>
            </ul>
        </div>
	</header>
	<div class="pageContent" >
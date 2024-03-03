<!--  Product single Swatch images -->
@liquid('assign_product')
@liquid('product')
<div  class="lh-wrapper lh-product-single" data-pid="@liquid('product_id')" data-money-format='@liquid("money_format")' data-vid_url="@liquid('vid_url')">
		<div class="lh-container">
			<div class="lh-details-product">
			<div class="lh-row lh-align-start">
				<div class="lh-product-sync-images">
					<div class="lh-details-images lh-row lh-no-gutters use-zoom-@attr(section.settings.use_zoom) lh-promote-@attr(section.settings.show_badge)">
						<div class="lh-big-slide lh-col-md-10">
							<div class="lh-big_slide-lg">
								@liquid('badge')
								<div class=" block-slide-lg lh-slick-big swiper-container">
									<div class="swiper-wrapper">
										@liquid('featured_image')
									</div>
								</div>
							</div>

						</div>
						<div class="lh-small-slide lh-col-md-2">
							<div class="block-slide-sm lh-slick-nav swiper-container">
								<div class="swiper-wrapper">
									@liquid('thumbnail')
								</div>

							</div>
							<div class="lh-slide-small-nav">
								<div class="swiper-button-prev">
									<svg version="1.1" width="40" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
										<path fill="currentColor" d="M70.4,2.4L26.2,46.8c-0.9,0.9-1.3,2.1-1.3,3.3c0,1.2,0.5,2.4,1.3,3.3l44.2,44.2c1.1,1.1,2.8,1.1,3.9,0
													c0.5-0.5,0.8-1.2,0.8-1.9c0-0.7-0.3-1.4-0.8-1.9L30.7,50.1L74.3,6.3c1.1-1.1,1.1-2.8,0-3.9C73.2,1.3,71.5,1.3,70.4,2.4z" ></path>
									</svg>

								</div>
								<div class="swiper-button-next">
									<svg version="1.1" width="40" height="40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
										<path fill="currentColor" d="M29.6,97.6l44.2-44.4c0.9-0.9,1.3-2.1,1.3-3.3c0-1.2-0.5-2.4-1.3-3.3L29.6,2.4c-1.1-1.1-2.8-1.1-3.9,0
													c-0.5,0.5-0.8,1.2-0.8,1.9c0,0.7,0.3,1.4,0.8,1.9l43.6,43.6L25.7,93.7c-1.1,1.1-1.1,2.8,0,3.9C26.8,98.7,28.5,98.7,29.6,97.6z" ></path>
									</svg>

								</div>
							</div>
						</div>
					</div>
					@include('social')
					<div class="lh-block-custom lh-custom-html">@lang(section.settings.c_html_image)</div>
				</div>
				<div class="lh-summary">
					<div class="lh-content-summary" data-hidden="@liquid('isHidden')">
						<h4 class="product-name lh-product-title">
							@liquid('title')
						</h4>
						
						<div class="clearfix"></div>
						@if(section.settings.use_rating == 'yes')
						<div class="lh-wrap-product-rating">
							@liquid('rating')
						</div>
						<div class="clearfix"></div>
						@endif
						<span class="lh-price-block price ">
							@liquid('price')
						</span>
						<div class="clearfix"></div>
						
						@include('countdown')
						<div class="clearfix"></div>
						@include('product-form')
						@include('badge')

					</div>
				</div>
			</div>
		</div>
		<div class="lh-wrap-tab lh-bt">
			@include('tabs')
		</div>
	</div>
	@if(section.settings.size_guide_content)
	<div class="lh-modal-size-guild lh-modal" id="modal-size-guild-@liquid('product_id')" style="display:none">
	    <div class="lh-modal-box">
		    <div class="modal-header">
		      <span class="lh-close-modal lh-modal-sizechart"><span class="lh-close" title="Close">✖</span></span>
		    </div>
		    <figure class="lh-modal-body lh-custom-html">
		      @print(section.settings.size_guide_content)
		    </figure>
	    </div>
	</div>
	@endif
	@if(section.settings.shipping.length && section.settings.shipping[0].value)
	<div class="lh-modal-shipping lh-modal" id="modal-shipping-@liquid('product_id')" style="display:none">
	    <div class="lh-modal-box">
		    <div class="modal-header">
		      <span class="lh-close-modal"><span class="lh-close" title="Close">✖</span></span>
		    </div>
		    <figure class="lh-modal-body lh-modal-shipping__content lh-custom-html">
		      @liquid('shipping')
		    </figure>
	    </div>
	</div>
	@endif
</div>
@javascript

	if(document.querySelector('.page-container') && window.getComputedStyle(document.querySelector('.page-container')).transform.indexOf('matrix') != -1){
		document.querySelector('.page-container').style.webkitTransform='none';
		document.querySelector('.page-container').style.transform='none';
	}
	var $_this = jQuery(this),
			$dom = $_this.find('.lh-product-single'),
	    data_slide = {
	      speed : 500,
	      breakpointsInverse : true,
	      watchSlidesVisibility : true,
	      grabCursor : true,
				autoHeight: true,
	      watchOverflow : true,
	    }
	var $for = $_this.find('.lh-details-images .lh-slick-big');
	var $nav = $_this.find('.lh-details-images .lh-slick-nav');
	var thumb = new Swiper($nav, jQuery.extend({
	  slidesPerView: 'auto',
		centerInsufficientSlides: true,
		navigation: {
	      nextEl: '.lh-slide-small-nav .swiper-button-next',
	      prevEl: '.lh-slide-small-nav .swiper-button-prev',
	  },
	  breakpoints: {
	    0: {
	      direction: 'horizontal',
	      spaceBetween: 5
	    },
	    768: {
	      direction: 'vertical',
	      spaceBetween: 8
	    }
	  }
	},data_slide));
	var slide = new Swiper($for, jQuery.extend({
	  slidesPerView: 1,
	  navigation: {
	      nextEl: '.lh-slide-lg-nav .swiper-button-next',
	      prevEl: '.lh-slide-lg-nav .swiper-button-prev',
	  },
	  on : {
			slideChange: function(){
				thumb.slideTo(slide.realIndex,300,false);
				var vid = $(slide.visibleSlides[0]).data('variant_id').toString();
				if (vid) {
						var id = $_this.find('[name="id"]').val();
						if(!id || !vid.includes(id.toString()))
							$_this.find('[name="id"]').attr('vid',parseInt(vid.split(',')[0]))[0].dispatchEvent(new Event('swatch'));
				}
	    },
			slideChangeTransitionEnd: function(){
				thumb.update();
				$dom.removeClass('lh-onchange-variant');
			}
	  },
	  thumbs: {
	    swiper:thumb
	  }
	},data_slide));
	
	setTimeout(function() {
	    jQuery.fn.zoom && $_this.find('.use-zoom-yes').length && $_this.find('.zoom__image img').each(function() {
	        var $this = jQuery(this);
	        $this.trigger('zoom.destroy');
	        $this.closest('.zoom__image').zoom({
	            url: $this.attr('data-bigimg'),
	            touch: false
	        });
	    });
	}, 2000);
	$_this.find('.lh-modal').on("click",function(e){
		if($(e.target).closest('.lh-modal-body').length == 0){
			$(this).fadeOut(100);
		}
	})
	$_this.find('.lh-wrap-product-rating').click(function(){

		var tab_review = $_this.find('.lh-nav-tabs .tab-link[data-tab-handle="review"]');
		if(tab_review.length){
			if(!tab_review.hasClass('active')){
				tab_review.parent().siblings().find('.tab-link.active').removeClass('active');
				tab_review.closest('.lh-tabs-product').find('.lh-tab-content.active').removeClass('active');
				tab_review.addClass('active');
				tab_review.closest('.lh-tabs-product').find('.lh-tab-content[data-tab-handle="review"]').addClass('active');
			}
			tab_review[0].scrollIntoView({
			    behavior: "smooth",
			    block: "start"
			});
		}
	});



@endjavascript

<svg class="section-line large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.9 417" width="341.9px">
	<path fill="none" stroke="#000000" stroke-width="12" d="M320.9,36c-8.3,0-15-6.7-15-15s6.7-15,15-15s15,6.7,15,15S329.2,36,320.9,36v100.1L21,296v85c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15s-6.7-15-15-15"/>
</svg>
<svg class="section-line small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.5 171.5" width="167.5px">
	<path fill="none" stroke="#000000" stroke-width="12" d="M21,36c-8.3,0-15-6.7-15-15S12.7,6,21,6s15,6.7,15,15S29.3,36,21,36v31l83.5,83.5h27c0,8.3,6.7,15,15,15s15-6.7,15-15s-6.7-15-15-15s-15,6.7-15,15"/>
</svg>
<section class="white" id="news">
	<div class="container-fluid">
		<div class="row">
			<div class="col-12">
				<h1 class="text-center">News & events</h1>

				<?php
				$feed = simplexml_load_file('https://medium.com/feed/@oraclecharli3');
				$i = 0;

				if ($feed) {

				echo '
				<div class="side-scroller wide">
					<div class="side-scroller-items">
				';

					foreach ($feed->channel->item as $item) {
						if ($i < 6) {

							$title = $item->title;
							$link = $item->link;
							$pubDate = strtotime($item->pubDate);
							$date = date('F j, Y', $pubDate);
							$content = 'http://purl.org/rss/1.0/modules/content/';
							$text = $item->children($content)->encoded;
							
							$dom = new DOMDocument();
							$dom->loadHTML($text);
							$xml = simplexml_import_dom($dom);
							$images = $xml->xpath('//img');

							if ($images) {
								$imgSrc = $images[0]['src'];
							}
							else {
								$imgSrc = '/assets/images/default-article-photo.png';
							}

							echo '
							<div class="item">
								<a class="item-header" href="'.$link.'" target="_blank">
									<img src="'.$imgSrc.'" alt="Article photo">
								</a>
								<div class="item-text">
									<p class="muted">'.$date.'</p>
									<h5>'.$title.'</h5>
									<div class="buttons-alt">
										<a class="button-alt" href="'.$link.'" target="_blank">Read more</a>
									</div>
								</div>
							</div>
							';

						}

						$i++;
					}

				echo '
				</div>
					<div class="side-scroller-controls">
						<div class="side-scroller-control prev"></div>
						<div class="side-scroller-control next"></div>
					</div>
				</div>
				';
				
				}

				?>

				<div class="buttons center">
					<a href="https://oraclecharli3.medium.com/" target="_blank" class="button black"><span>Read more on Medium</span></a>
				</div>

			</div>
		</div>
	</div>
</section>
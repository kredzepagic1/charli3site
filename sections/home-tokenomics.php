<svg class="section-line large" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1004 381" width="1004px">
	<path fill="none" stroke="#000000" stroke-width="12" d="M983,36c-8.3,0-15-6.7-15-15s6.7-15,15-15s15,6.7,15,15S991.3,36,983,36v76.7H376.3L220.6,268.4H21V345c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15s-6.7-15-15-15"/>
</svg>
<svg class="section-line small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 185" width="184px">
	<path fill="none" stroke="#000000" stroke-width="12" d="M148,21c0-8.3,6.7-15,15-15s15,6.7,15,15s-6.7,15-15,15S148,29.3,148,21H91v99l-57.3,36.1c-2.6-4.2-7.4-7.1-12.7-7.1c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15c0-2.9-0.8-5.6-2.3-7.9"/>
</svg>
<section class="red" id="tokenomics">
	<div id="overlay">
		<div class="text">Tokenomics restructuring underway</div>
	</div>
	<div class="container-fluid" style="filter: blur(5px)">
		<div class="row">
			<div class="column col-12 col-sm-6 donut-column">
				<h6>Total token supply:</h6>
				<h5>100,000,000</h5>
				<h1>Tokenomics</h1>
				<p>Charli3 tokenomics were designed with the community and oracle functions in mind. The focus on longevity ensures a long-term functional node operator network and well-rounded distribution for all operations.</p>
				<div class="buttons">
					<a href="#" class="button white-border" onclick="tokenomicsSwitch(event)"><span>Vesting schedule</span></a>
				</div>
			</div>
			<div class="column col-12 col-sm-6 donut-column">
				<div id="c3-tokenomics-donut">
					<svg width="100%" height="100%" viewBox="0 0 120 100">
						<circle class="donut-seed" r="30" cx="60" cy="50"></circle>
						<text class="donut-seed" x="84" y="12">Seed<tspan x="84" dy="1.2em">18%</tspan></text>
						<circle class="donut-private" r="30" cx="60" cy="50"></circle>
						<text class="donut-private" x="107" y="48">Private<tspan x="107" dy="1.2em">13%</tspan></text>
						<circle class="donut-public" r="30" cx="60" cy="50"></circle>
						<text class="donut-public" x="100" y="74">Public<tspan x="100" dy="1.2em">6%</tspan></text>
						<circle class="donut-rewards" r="30" cx="60" cy="50"></circle>
						<text class="donut-rewards" x="50" y="93">Node rewards<tspan x="50" dy="1.2em">31%</tspan></text>
						<circle class="donut-liquidity" r="30" cx="60" cy="50"></circle>
						<text class="donut-liquidity" x="13" y="65">Liquidity<tspan x="13" dy="1.2em">3%</tspan></text>
						<circle class="donut-dev" r="30" cx="60" cy="50"></circle>
						<text class="donut-dev" x="12" y="52">Dev Pool<tspan x="12" dy="1.2em">8%</tspan></text>
						<circle class="donut-reserves" r="30" cx="60" cy="50"></circle>
						<text class="donut-reserves" x="14" y="37">Reserves<tspan x="14" dy="1.2em">1%</tspan></text>
						<circle class="donut-team" r="30" cx="60" cy="50"></circle>
						<text class="donut-team" x="32" y="14">Team<tspan x="32" dy="1.2em">20%</tspan></text>
					</svg>
				</div>
			</div>
			<div class="column col-12 vesting-column">
				<div id="vesting-schedule-chart">
					<div class="chart-cover-x"></div>
					<div class="chart-cover-y"></div>
				</div>
				<div class="buttons center">
					<a href="#" class="button white-border" onclick="tokenomicsSwitch(event)"><span>Back</span></a>
				</div>
			</div>
		</div>
	</div>
</section>
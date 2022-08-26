/**
 * Loader
 */

let loadWait = 200;

if (
  !localStorage.getItem('firstload') &&
  !document.documentElement.classList.contains('subpage')
) {
  loadWait = 1500;
  localStorage.setItem('firstload', 'false');
}

function load() {
  setTimeout(() => {
    document.documentElement.classList.add('loaded');

    setTimeout(() => {
      document.documentElement.classList.remove('loading');
      document.documentElement.classList.remove('loaded');
    }, 200);

    //popupOnLoad();
  }, loadWait);
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

/**
 * Vivus animations
 */

const electroLines = document.querySelectorAll('.section-line');
if (electroLines) {
  electroLines.forEach((line) => {
    new Vivus(
      line,
      {
        duration: 80,
        pathTimingFunction: Vivus.EASE_IN_OUT,
      },
      () => {}
    );
  });
}

/**
 * Main menu control
 */

const menuButton = document.getElementById('menu-button'),
  mainMenu = document.getElementById('main-menu'),
  menuItems = mainMenu.querySelectorAll('a');

menuButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('menu-in');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    document.documentElement.classList.remove('menu-in');
  });
});

/**
 * Modal control
 */

function getCharli3(e) {
  e.preventDefault();

  if (document.documentElement.classList.contains('menu-in')) {
    document.documentElement.classList.remove('menu-in');
  }

  let modal = document.getElementById('get-charli3');

  if (modal.classList.contains('in')) {
    modal.classList.add('out');

    setTimeout(() => {
      modal.classList.remove('in');
    }, 200);
  } else {
    setTimeout(() => {
      modal.classList.add('changing');
      modal.classList.remove('out');

      setTimeout(() => {
        modal.classList.add('in');
        modal.classList.remove('changing');
      }, 200);
    }, 10);
  }
}

// function popupOnLoad(){
// 	if (document.documentElement.classList.contains('menu-in')) {
// 		document.documentElement.classList.remove('menu-in');
// 	}

// 	document.getElementById("get-charli3-popup").style.backdropFilter = "blur(0.02rem)"

// 	let modal = document.getElementById('get-charli3-popup');

// 	if (modal.classList.contains('in')) {
// 		modal.classList.add('out');

// 		setTimeout(() => {
// 			modal.classList.remove('in');
// 		}, 200);
// 	}
// 	else {
// 		setTimeout(() => {
// 			modal.classList.add('changing');
// 			modal.classList.remove('out');

// 			setTimeout(() => {
// 				modal.classList.add('in');
// 				modal.classList.remove('changing');
// 			}, 200);
// 		}, 10);
// 	}
// }

function getCharli3Popup(e) {
  e.preventDefault();

  if (document.documentElement.classList.contains('menu-in')) {
    document.documentElement.classList.remove('menu-in');
  }

  let modal = document.getElementById('get-charli3-popup');

  if (modal.classList.contains('in')) {
    modal.classList.add('out');

    setTimeout(() => {
      modal.classList.remove('in');
    }, 200);
  } else {
    setTimeout(() => {
      modal.classList.add('changing');
      modal.classList.remove('out');

      setTimeout(() => {
        modal.classList.add('in');
        modal.classList.remove('changing');
      }, 200);
    }, 10);
  }
}

/**
 * Accordion control
 */

const accordions = document.querySelectorAll('.accordion');
if (accordions) {
  accordions.forEach((accordion) => {
    let header = accordion.querySelector('.accordion-title');

    header.addEventListener('click', () => {
      let accordionBody = accordion.querySelector('.accordion-body');
      let inner = accordionBody.querySelector('.inner');
      let style = getComputedStyle(inner);
      let height =
        inner.offsetHeight +
        parseInt(style.marginTop) +
        parseInt(style.marginBottom);

      if (accordion.classList.contains('open')) {
        accordionBody.style.height = 0 + 'px';
      } else {
        accordionBody.style.height = height + 'px';
      }

      window.addEventListener('resize', () => {
        height =
          inner.offsetHeight +
          parseInt(style.marginTop) +
          parseInt(style.marginBottom);
        accordionBody.style.height = height + 'px';
      });

      setTimeout(() => {
        accordion.classList.toggle('open');
      }, 200);
    });
  });
}

/**
 * Side scroller prev/next control
 */

const sideScrollers = document.querySelectorAll('.side-scroller');
if (sideScrollers) {
  sideScrollers.forEach((scroller) => {
    let container = scroller.querySelector('.side-scroller-items');
    let controls = scroller.querySelector('.side-scroller-controls');
    if (controls) {
      let prevButton = controls.querySelector('.prev');
      let nextButton = controls.querySelector('.next');

      if (container.scrollWidth > container.offsetWidth) {
        let items = container.querySelectorAll('.item');

        function alignButtons() {
          let height = items[0].querySelector('.item-header').offsetHeight / 2;
          prevButton.style.top = height + 'px';
          nextButton.style.top = height + 'px';
        }

        alignButtons();

        window.addEventListener('resize', () => {
          alignButtons();
        });

        function calculate() {
          if (container.scrollLeft == 0) {
            prevButton.classList.add('disabled');
          } else {
            prevButton.classList.remove('disabled');
          }

          if (
            container.scrollLeft + container.offsetWidth ==
            container.scrollWidth
          ) {
            nextButton.classList.add('disabled');
          } else {
            nextButton.classList.remove('disabled');
          }
        }

        calculate();

        container.addEventListener('scroll', () => {
          calculate();
        });

        prevButton.addEventListener('click', () => {
          for (let item of items) {
            if (container.scrollLeft > item.offsetLeft) {
              container.scrollLeft -= item.offsetWidth;
              break;
            }
          }
        });

        nextButton.addEventListener('click', () => {
          for (let item of items) {
            if (
              container.scrollLeft + container.offsetWidth <
              item.offsetLeft + item.offsetWidth
            ) {
              container.scrollLeft += item.offsetWidth;
              break;
            }
          }
        });
      }
    }
  });
}

/**
 * Play how it works video when in viewport
 */

const aboutVideo = document.getElementById('about-video');
if (aboutVideo) {
  const aboutVidoWaypoint = new Waypoint({
    element: aboutVideo,
    handler: () => {
      aboutVideo.play();
    },
    offset: '75%',
  });
}

/**
 * Partner page
 */

$('#int-btn').click(function () {
  $('#int-btn').css({ background: '#E52F2F' });
  $('#par-btn').css({ background: '#000000' });
  $('#par-section').removeClass('par-section-add-flex');
  $('#par-section').addClass('par-section-add-none');
  $('#int-section').addClass('par-section-add-flex');
});

$('#par-btn').click(function () {
  $('#par-btn').css({ background: '#E52F2F' });
  $('#int-btn').css({ background: '#000000' });
  $('#int-section').removeClass('par-section-add-flex');
  $('#int-section').addClass('par-section-add-none');
  $('#par-section').addClass('par-section-add-flex');
});

/**
 * Team page
 */
const teamPage = document.getElementById('team-page');
if (teamPage) {
  $('#team-up-to-top').click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      0
    );
  });

  for (i = 0; i <= 13; i++) {
    $('#team-member-' + i).click(function () {
      for (a = 0; a <= 17; a++) {
        $('#team-des-' + a).addClass('hidden');
        $('#team-member-' + a + ' img').removeClass('isSelected');
        $('#team-member-' + a + ' img').addClass('black');
      }

      $('#' + this.id + ' img').removeClass('black');
      $('#' + this.id + ' img').addClass('isSelected');

      var whichNumber = this.id.replace('team-member-', '');

      $('#team-des-' + whichNumber).removeClass('hidden');

      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $('#team-des-' + whichNumber).position().top - 100,
        },
        0
      );
    });
  }
}

/**
 * Team desktop
 */

const teamPhotosDesktop = document.getElementById('team-photos-desktop');
if (teamPhotosDesktop) {
  let teamPhotoDesktop = teamPhotosDesktop.querySelectorAll('.team-photo'),
    teamBiosDesktop = document.getElementById('team-bios-desktop'),
    teamDescription = document.getElementById('team-description');

  teamPhotoDesktop.forEach((photo, i) => {
    photo.addEventListener('click', (event) => {
      let bioNum;

      switch (i) {
        case 0:
          bioNum = 'first';
          break;
        case 1:
          bioNum = 'second';
          break;
        case 2:
          bioNum = 'third';
      }

      if (!teamPhotosDesktop.classList.contains('selected')) {
        teamPhotosDesktop.classList.add('selected');
        photo.classList.add('selected');
        teamDescription.classList.add('change');
        setTimeout(() => {
          teamBiosDesktop.classList.add(bioNum);
          teamDescription.classList.add('selected');
          teamDescription.classList.remove('change');
        }, 200);
      } else {
        if (photo.classList.contains('selected')) {
          teamPhotosDesktop.classList.remove('selected');
          photo.classList.remove('selected');
          teamDescription.classList.add('change');
          setTimeout(() => {
            teamBiosDesktop.classList.remove(bioNum);
            teamDescription.classList.remove('selected');
            teamDescription.classList.remove('change');
          }, 200);
        } else {
          teamPhotoDesktop.forEach((cur) => {
            cur.classList.remove('selected');
          });
          photo.classList.add('selected');
          teamDescription.classList.add('change');
          setTimeout(() => {
            teamBiosDesktop.removeAttribute('class');
            teamBiosDesktop.classList.add(bioNum);
            teamDescription.classList.remove('change');
          }, 200);
        }
      }
    });
  });
}

/**
 * Tokenomics donut
 */

const donut = document.getElementById('c3-tokenomics-donut');
if (donut) {
  let donutBits = donut.querySelectorAll('circle'),
    donutLabels = donut.querySelectorAll('text'),
    duration = 400,
    delay = 0;

  if (donutBits) {
    donutBits.forEach((donutBit) => {
      donutBit.style.transition =
        'stroke-dashoffset ' + duration + 'ms ease ' + delay + 'ms';
      delay += duration;
    });
  }

  if (donutLabels) {
    let duration = 400,
      delay = 0;
    donutLabels.forEach((donutLabel) => {
      donutLabel.style.transition =
        'opacity ' + duration + 'ms ease ' + delay + 'ms';
      delay += duration;
    });
  }

  const donutWaypoint = new Waypoint({
    element: donut,
    handler: () => {
      donut.classList.add('in');
    },
    offset: '75%',
  });
}

/**
 * Tokenomics chart
 */

const chart = document.getElementById('vesting-schedule-chart');
if (chart) {
  // set the dimensions and margins of the graph
  const margin = { top: 15, right: 15, bottom: 50, left: 50 },
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select('#vesting-schedule-chart')
    .append('svg')
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    .attr(
      'viewBox',
      `0 0 ${width + margin.left + margin.right} ${
        height + margin.top + margin.bottom
      }`
    )
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // the data
  const data = [
    { month: 0, tokens: 14664023 },
    { month: 1, tokens: 14664023 },
    { month: 2, tokens: 14664023 },
    { month: 3, tokens: 14664023 },
    { month: 4, tokens: 17768903 },
    { month: 5, tokens: 20873782 },
    { month: 6, tokens: 23978661 },
    { month: 7, tokens: 28750207 },
    { month: 8, tokens: 33521753 },
    { month: 9, tokens: 38293299 },
    { month: 10, tokens: 43064845 },
    { month: 11, tokens: 47836391 },
    { month: 12, tokens: 52607937 },
    { month: 13, tokens: 55442328 },
    { month: 14, tokens: 58276720 },
    { month: 15, tokens: 61111111 },
    { month: 16, tokens: 63945503 },
    { month: 17, tokens: 66779894 },
    { month: 18, tokens: 69614286 },
    { month: 19, tokens: 71345238 },
    { month: 20, tokens: 73076190 },
    { month: 21, tokens: 74807143 },
    { month: 22, tokens: 76538095 },
    { month: 23, tokens: 78269048 },
    { month: 24, tokens: 80000000 },
  ];

  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => +d.month)])
    .range([0, width]);

  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .attr('class', 'x-axis')
    .call(
      d3
        .axisBottom(x)
        .ticks(d3.max(data, (d) => +d.month))
        .tickFormat(function (d) {
          return 'T+' + d;
        })
    );

  // Add X label
  svg
    .append('text')
    .attr('transform', `translate(${width / 2}, ${height + margin.top + 30})`)
    .attr('class', 'x-label')
    .text('Months: T = Token Generating Event (Launch)');

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => +d.tokens)])
    .range([height, 0]);

  svg.append('g').call(
    d3.axisLeft(y).tickFormat(function (d) {
      return d / 1000000;
    })
  );

  // Add Y label
  svg
    .append('text')
    .attr(
      'transform',
      `translate(${15 - margin.left}, ${height / 2}) rotate(-90)`
    )
    .attr('class', 'y-label')
    .text('Millions');

  // Add Y grid
  const yGrid = svg
    .append('g')
    .attr('class', 'y-grid')
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(''));

  // Add clip path
  svg
    .append('clipPath')
    .attr('id', 'area-clip')
    .append('rect')
    .attr('width', 0)
    .attr('height', height);

  // Add the area
  svg
    .append('path')
    .datum(data)
    .attr('class', 'area')
    .attr('clip-path', 'url(#area-clip)')
    .attr(
      'd',
      d3
        .area()
        .x((d) => x(d.month))
        .y0(y(0))
        .y1((d) => y(d.tokens))
    );
}

/**
 * Tokenomics section
 */

const tokenomicsSection = document.getElementById('tokenomics');
if (tokenomicsSection) {
  function tokenomicsSwitch(e) {
    e.preventDefault();
    tokenomicsSection.classList.add('changing');

    setTimeout(() => {
      tokenomicsSection.classList.remove('changing');
      tokenomicsSection.classList.toggle('vesting');

      setTimeout(() => {
        chart.classList.add('in');
      }, 100);
    }, 200);
  }
}

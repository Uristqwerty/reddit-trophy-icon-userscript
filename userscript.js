// ==UserScript==
// @name     Reddit user info icons?
// @version  1.1
// @grant    none
// @run-at   document-start
// @include  https://old.reddit.com/*
// @include  https://www.reddit.com/*
// ==/UserScript==

let script = document.createElement('script');
script.innerHTML = '(' + (function() {
  let IMG = {
    uristqwerty:    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVQ4jbWR0Q3AIAhE2czRGA03ox+mCvTAtokk92PkcRxEh0uDPjarev0AKYk4cash0fIS85BICtDeOxQ3GpNvyFrn2RwnW8h0AlzAZgtxq1QA+xm8jZyyFV44sGE/A0RBJgB8gRhc4QADqivsAA6C1tg1T0iic3UBwir+SVPcgjsAAAAASUVORK5CYII=',
    mc_moddev:      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHUlEQVQ4jbXT3U9ScRjA8d9FbVmpEXCOHOiAKGuoaEoiB0Yv6JyYiC9tZegBPICgUlabYm7mtE17t7rrH2mrpWJu3vQ/fbvwAjcvHBc999/Pnv32/IT4n2ObN2PXJWoOG0t1mIuN1BUv0Gw4ac268Bqe8yHLbANSzoylcA0l24R7yoXNkDg2BAcpgW+xDXvJfBZqydtwLCtYF8yY9HqkvAWlKOMyVI4NwVFGYJuTUJ5LuDN2WtI2HNn6KpTsdZIPOVFKVuScBVP6KjcKNqzPTBzNCvZmBOYFE+qsQiUleDfhZ2VUqwLlqBvdb2H+vo9lTeDISpiKV7BONfArebJ+JSOopASHacHXRxqfhuUqkAupLIYkSvc8vLjrYilsweg+CfZ1wZ/T8YjMzmQfOzG1ChRCLtJdgpymMh1QKQYlDnTBz6TgMCP4EL/JWuQyq1GV7f5LfEx0sD3aVQVmfIJi2IUe9vIy0sS+LviRFOzpgrUBD19iF9kcVNmaCPBtspONeA+bw94qkPDJTGutzGl2KqmTuJISPOqWKQ/dohxVeZvwsTvezu5wE28GZLbGTz3iVIcgG7DypEfity74mxMUgjL5oMSrB352H0fYHGpha9DJ94ce1qMK6yP+s/dgaM2MaZ0s3XGQvX2dMZ+Vz3EnGzEva/FeVvrdvB/1nn+RY33tPA1ZSfbIrERMrMaDlBPh2v9EKSB4HWurPaxl/gHFUw27EKP/TwAAAABJRU5ErkJggg==',
    mc:             'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACH0lEQVQ4jbXT21MSARjG4b2wmaw8IHtgF1zOGSqaoshCZKGZkIiHZsw0UljQVSmzGYWc1NFmtDPZXf/sr0ua8cLhovf+fS6+eT9B+J9Rt+w48zJNFzsqrditDlqtFrxFNwHTQ6gYvB4SC+3IJTviZiea6cC37EEtymjbIj2FAOGdXpwV+1XIX1Zx7WtI23Zs+TbksohmKXiKOi7LgWrKqBsy2jsZ37oT/5qKy2xrQCujbspxN1pFQimJ2Nbu0L2pIr210WW20Vpqwb5tQy9oeCwXXxYiHMwaDaCa8pGPiGw9DrNvCLhMGZt1G2m5HYcl4d3V6S6o1Cb9nGcCXC4Z/MgoDaAU19mJy1QeBdkb97CbECkOCTisDtS9To6ng3x82kPtSYDLGYWLxTEu0noD2Ix7WBsUKBk6q1EdKyazcE9gK9ZFPevmW7aHw+Qtaimd84mbfM/1cz472ABehQWshId8IsT7pIOdRDfmqEgp7uVwMsiv9A1Op3TOFqL8XhzgJDvMaSbUAHJhhVUjwIbhpDzex8aDAOsjEktDCtXp+1RTOp9zYerzfdQzDj5NKpzN/3PE5X4BMyrxcljmdfwuVsLHZkyhHJP58CxC/UWS02k/Z1Nu/jwPcpTSOJqJXN1D0fAyZwyw+9CFOdLFXFjiZ9bNSTrEYXaUgwkfX2dD1y9ybqyPN3GJlWGFg6SNWjZGNZdo/icqUYHjdG/zxWbyF77vAg4P+qSsAAAAAElFTkSuQmCC',
    incremental:    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC2klEQVQ4jW3QwWubdRwG8O+/oLuZ3rrLeom7vbnE1IwVOsSQ0B2WSbtmQhLTtfk9z++iQ8ZQT2tlEYZU7cGiliobG424Q1uxtS228BbfYVqLKXS8ghhooRSPj4ctYtHT9/T98DyPmZlVKpUX6r5+EUCZ5HuAn+s9e1bHx8fqO9cngFskV0l+TfIeyVt18opz7rzVarWXSGacdyMkJz19E8BWKkgpjmPFcawglRLAA5IhPZvw/hOSnuRrBqAPQA7AHQIL10avCcAfAwMDarVa2tvbU7vdVn9/v+gZA4wIPPIed5xzo+acy5K8TfLxyMiIZmZmND5+Q2amldVVbW5uKgxDtVotZTIZgfwd5E8gZhw5Yc973wfwpFwua2pqSmYmSTIzLSw0tbi4qEKhoMHBQV2//qbo+QvA7zzwvgFoeO9/IPl0bGxM1Wr1H6CLzM/Pq1gsqtFo6PPZWQ0PDwvkiiM/MgJfAdwG+Gcul1Oj0TgFdJHmt00NDV1WtVJRqVQSgB9JfmgkHwP+t2z2gra3t1UsXvkP0EVKpZJqtZro+ZTkGsl7RnARQPtCNqswDLW8vPy/CZ7tsaB8Pq9yuSKCKyQ/fp4A7Uwmo1arpfX1jVMjdu/c3JyWlpa0u7urIEiJnt87x08NwAPv+WuQCrS/v68oeqKNjXWZmd64evUUEoah4jjW4eGhzrx4Ro68ayRnAWy9nEwqjmO1221FUaRcLqd8viBP/mVmWltb087Ojjqdjnp7e2VmAnDTnHMfAP5hT0+Pjo6OlAoCHRwcKJvNanp6WtXqWxq6PKQoipROp3VyciIzE8lJADCSN5zjXZLfJBIJEYiSyaQ6nY6CICXA/0xiK/1KWh548O9KAIpWJ18HME5y0sN/BvgvQTxKJBLy8A9J3if5BYAGgJvOO3afSV6yiYmJc75ev+icG32Wxr0D4G0A75K8RdIDKAPIAyh67wskL5F81Tl3/m+0XTg6xcJkgQAAAABJRU5ErkJggg==',
    dragon:         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABz0lEQVQ4jY2OT0tiURiHf1BBWGDh6Pj3qleIQPoGtYkWLROiVlE05gR30ovQ3KAGpQympiHaDEKLYFa1Cdq4adNCcOV3EPF7PLM4kzNgSi88i/Oc8z4c6b/pdF5oty/RkGm3L+l0Xt6+73YfabfrQ5f/Rep0u4+D73q9BxoNr38xfSP8vw3TN+r7RsOj13sYDDRbZzRbd8yeCt8vEbgWH74bAtfGzZ6KZuuOZutsMPD0vEfsUNglkagJ60SEvxqsE+PskogdiqfnvcHAxpVIuCJf3WLRybLghoifi/i5WHBDLDpZ8tUtEq7YuNJgIHwsMmVxe19nMtkgte5hu8J2RWrdYzLZ4Pa+TqYswsdvBKKuyOyL1eISoZULQisXhCsiXFH/vFpcIrMvou4bAUmKFkRqR2TywvaEVTHYnnGpHREtDFmWpGhRpI6E/U2kayL005CuGZc6EtHiiEDQE1ZVhH4If0V8LBv8FeOsqgh6IwKSFCmIqdw4MzkfwQMRPBAzOR9TuXEio77/OrFtkV4bI748QWRXRHZFfHmC9NoYse13BKxNYX8Wc46wvhjmHOOszXcEAo5IFEXaEcmSIf3XBZx3BF5nPi+ynwzz+eGLfwDiggJ2qbRTFgAAAABJRU5ErkJggg==',
    spared:         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+0lEQVQ4jXXSTUzTBxzG8V9EhgFfKC/pvy38/wVb+spLw6AiL5IIVMBSoDhcQd7kLbi+WFwJrCNVrGWL6HyZm6K4RHdwmC0uiy7bbouZWZadvO2yy25ml112++6wAyHo7/zkc3ien8gbzmUWJRxQ6WssINBYzES3xrlBG2/Ki4hIKtW6e7rDxLCvBH+LyrWwm/SEnVNtCg+Xvfx0tZVI4ODrkenjFt4Pudj40MvdZAMn2wrYWKjiXsLF1LFcUmNG1hNuFk+W7gRCneWsvedh0lfIetLLyqyNgWbhRszKaqyd5PA+MjMqD5arGD6WT31Z1nZkzK9yM+pgwlfAn3XCyxrhbIdg2HiB3H1B7EQ2z/cl+LnsHL2Hd/Hjx7WMtpRsISOdRn7tfIuYv5Q/aoWXVcKT1WrkznMk8y3PPqrkB4nyXdYcJ5p3833GhvgKt4DpHoVnCw5uL1ZzLVHP9bibp2k7tz7oZT1eyMVpladrtRzxZFGpZfE4aUE2m5Cv6hQREdHMeYS6VB6nD3FhUuO3TBGvHvbw1xftfBo1k55x0Nu0CxEh+a6Kv1tFNpu395Cr38Pp4yr35u38c0Xj3xstvLrk5MF8OalTGqFWHd6KbCqNOkRk5xJHq/cTGTCTmbHzy5KRvz9x8nvSxJU5G4lBI+PthTS6cnEoOa//A0W/l2jQzMKQlXBQIx7UmO02MtulZ7Zb4YzfwNuWA1hM+3cCHms+tbYifPV6IsFyRjtKEMlGJI8+r47xNgMVpXuwazraaop3AuM+jUigjPjAQURyMBTnI5JLhVlHoFGhwV2M1VTE6mkba5MuBpoM25GRo6Wkx+18FnUz1F5GLKiyMOQmHFAZ9Znpb9ET69eID9pYGbHxzhHTFmDWHyDebyXaZyY15uTyXDUXplycn7BzK+Lk8pSFq+EarkfdLIac3Ik5WRmxkZez93+k55DCmS6NR+e93Dzr5sslB4+W63hy0cvXlxrYTHlYT3j4JlXF5/N13F+qIdxr5bCzCBGR/wA44nnu7ySk9wAAAABJRU5ErkJggg==',
    snapped:        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAjUlEQVQ4ja2SwQ3FIAxDO1228BbewkPnn0BpcKGVfiQOJPjFBK7rEJJSUp7OHYNk7vZbAYCsubF/FdX+K+G4c7dYxSSX+jw0ir0byTlM60RSDgCArDDn9Jbvwip2nW8OImIRPQHtf6gAtzpomUNEZId0Uc25AU9Iv87O2SPAOQKw1O0sviz3tFuIFfwjfil3DDb/e9uQAAAAAElFTkSuQmCC',
    charter_member: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVQ4jSXQ6VJbZQCA4e9OKoQ4OlPZkkDC0kIZfykqFAiFaAdaOOdkOYFsEEopRUbrFEcoSpXpeEk0tgRCyMZaKjY0achKzuuP3sEzjxBCCDJByAbgcobqeQDOA3DuhfQ81VMPpIPwbxDeBiAdgHM/XMwhhBBi46GZy22F3PY470L3yO9MQkoiu2enFHZSisvkt2WqYYVCxE4xoVDedVJIymwutSGePbBwFZEpR11w4IZ9P5ktiVx8Eo6mqMRk8jsSJN0QU8juSJSP3Whv7DzxGBCbS21Uowrp1xIcekiH7qEdqXA2zcqsgZU5A4VdB/monVx4gkrSAzEXlZjE6oIB8avPSCnioppwoyVkiq8m0BIuVmea6b/RxEhPC+uLZrJbMqS8pF+PQdRFKSqx8diI2FgyUzlxkg7JLKv1PJs1sRYwcKenBestIwM3m+nvbGT1gYmVGQPL6hdc7trJRySeL5sRG4tmtBMnxZSDSjaItdvI0M0mBjob6O9s5Nv2BkZ7jHzd+jnDt0xUs34uwvchKfPiZzPiqd+EdjBNYccJRw5K7z1Yu5oZ6mpmqNuI7ctWetsaGLjRxNV/QUphifehcbQDFy+emBF/LrVSjioU92RIKKwFLXzX0UhfRwP9HfX0WurptVyn13ydv36yQNJBJe7kMiSz+WMbYv2RiXLKSTGlwKmHwS4DfR0NfGWpJ38+DZkA37R/FNzubITDKbQjJxw5WZtvRfy2YKAUn0Tb93F1KGPtNlDMeMmnvZByQEyFQgBKswx1G7nYlSlEJKoJlfVZI+L5ogWOp9ASKtnXCtqZB1IqlbiLXFjhw0uZakwhE5LhjYerExfEvGRejvPU14JYn7NQ2FMox+yQVCFuRzt18GFbgriTSkqB1BT5XYn8/gSVPRckHRT+kfhjwYxYDZoonahc7jjgVCazrVDYk0mHJ+BMJbczSebV/Y/Jxw5y+3bKEQfvtsb4/ZEFsbpoxNV3DdX6CertGnxWHfM2PXM/6PAN1/F44jPcI7X4bToCw3r8o3r8thq8o7X8/Us7wmfTofZfw3NHh7uvhmlrLbM2PQGbDnVAh3ekloW7eryDeh6O1eH/vhbnYA1zdz9leriO/wGDcbnb32d6QAAAAABJRU5ErkJggg==',
  };
  let criteria_new = [
    /* id, display, condition type, [condition_item, ...] */
    [
      'is_uristqwerty',
      {image: IMG.uristqwerty},
      'all',
      {type: 'str_eq', src: 'username', comp: 'Uristqwerty'},
   	],
    [
      'dragon_name',
      {image: IMG.dragon},
      'all',
      {type: 'str_contains_lower', src: 'username', comp: 'dragon'},
   	],
    [
      'snapped',
      {image: IMG.snapped},
      'all',
      {type: 'str_eq', src: 'trophy_name', comp: 'Snapped'},
   	],
    [
      'spared',
      {image: IMG.spared},
      'all',
      {type: 'str_eq', src: 'trophy_name', comp: 'Spared'},
   	],
  ];
  /*
  	Key: 	hexId = Number.parseInt(userid, 36).toString(16)
    			bucket = hexId.length - 2 + hexId.substring(0, 2)
          idBytes = (hexId.length - 1) >> 1;
  */
  // trophy: one bit. Did this user have this trophy when last checked?
  // trophyset: ⌈log₂(n+1)⌉ bits. A mutually-exclusive set of trophies plus a null state. Can be stored more compactly as a result.
  // goldmonths: 8 bits: Extracted from the 'reddit gold' trophy's description, 0 = no gold, 1-254 = n months, 255 = 'Charter Member'
  // postin: 1 bit: Have you seen a post by this user in that subreddit?
  // commentin: 1 bit: Have you seen a comment (not post) by this user in that subreddit?
  // activein: 1 bit: Have you seen a comment or post by this user in that subreddit?
  // activein-max: ⌈log₂(n+1)⌉ bits: If you want a galaxybrain progression of circlejerk subreddits, I guess? Only stores the index of the last active subreddit on the list.
  let data_sample = [
    ['goldmonths'],
    ['trophy','Charter Member'],
    ['trophyset','Snapped','Spared'],
    ['trophyset','Gilding I','Gilding II','Gilding III','Gilding IV','Gilding V','Gilding VI','Gilding VII','Gilding VIII','Gilding IX','Gilding X','Gilding XI','Gilding XII','Gilding XIII','Gilding XIV','Gilding XV'],
    ['trophyset','One-Year Club','Two-Year Club','Three-Year Club','Four-Year Club','Five-Year Club','Six-Year Club','Seven-Year Club','Eight-Year Club','Nine-Year Club','Ten-Year Club','Eleven-Year Club','Twelve-Year Club','Thirteen-Year Club','Fourteen-Year Club','Fifteen-Year Club','Sixteen-Year Club','Seventeen-Year Club','Eighteen-Year Club','Nineteen-Year Club'],
    ['activein','lounge'],
    ['activein-max','programming','programmerhumor','programmingcirclejerk'],
  ];
  let usergroups = {
    mc_moddev: {
      icon: IMG.mc_moddev,
      users_default: [
        'ReikaKalseki', 'asiekierka', 'immibis', 'Vazkii', 'HellFirePvP', 'awoocent', 'McJty', 'mezz',
      ],
    },
    mc: {
      icon: IMG.mc,
      users_default: [
        'Delet3r', 'Dinnerbone', 'rockenroll4life', '_Grum',
      ],
    },
    incremental: {
      icon: IMG.incremental,
      users_default: [
        'Eternal_Density', 'Brownprobe', 'astarsearcher', 'dSolver',
      ],
    },
  };
  let init_groups = () => {
    for(let groupname in usergroups) {
      let group = usergroups[groupname];
      group.users = {};
      let list = group.users_default;
      let dat = localStorage.getItem(`uq-usergroup-v0-${groupname}`);
      if(dat) {
        list = JSON.parse(dat);
      }
      for(let i in list) {
        group.users[list[i]] = true;
      }
    }
    console.log(usergroups);
  };
  let update_usergroup_status = (groupname, username, userid) => {
    let query = document.querySelectorAll(`.uq_icondiv-${userid}`);
    for(let i = 0; i < query.length; i++) {
      query[i].remove();
    }
    query = document.querySelectorAll(`.uq_found.id-t2_${userid}`);
    for(let i = 0; i < query.length; i++) {
      add_userdata(query[i], userid, username);
    }
    
    let group = usergroups[groupname];
    let list = group.users_default;
    let dat = localStorage.getItem(`uq-usergroup-v0-${groupname}`);
    if(dat) {
      list = JSON.parse(dat);
    }
    list = list.filter(n => n != username);
    if(group.users[username]) {
      list.push(username);
    }
    localStorage.setItem(`uq-usergroup-v0-${groupname}`, JSON.stringify(list));
  };
  let context_menu_user = null;
  let set_context_target = elem => {
    context_menu_user = {
      id: elem.dataset.uq_userid,
      name: elem.dataset.uq_username
    };
  }
  let toggle_usergroup = groupname => {
    let group = usergroups[groupname];
    group.users[context_menu_user.name] = !group.users[context_menu_user.name];
    // console.log(usergroups);
    update_usergroup_status(groupname, context_menu_user.name, context_menu_user.id);
  }
  let contextMenu = document.createElement('menu');
  contextMenu.type = 'context';
  contextMenu.id='uq_usericon_contextmenu';
  {
    let inner = document.createElement('menu');
    inner.label = 'toggle icon group';
    contextMenu.appendChild(inner);
  	for(let groupname in usergroups) {
      let menuitem = document.createElement('menuitem');
      menuitem.label = groupname;
      menuitem.icon = usergroups[groupname].icon;
      menuitem.dataset.uq_groupname = groupname;
      menuitem.addEventListener('click', ev => toggle_usergroup(ev.target.dataset.uq_groupname));
    	inner.appendChild(menuitem);
    }
  }
  
  //<menu type="context" id="uq_menutest"><menu label="toggle icon group"><menuitem label="mc-dev" icon=""></menuitem></menu></menu>
  // add contextmenu="uq_menutest" to taglines
  let tag_criteria = {
    me: {
      check_and_append: function(userdata, userid, username, div) {
        if(username == 'Uristqwerty') {
          div.insertAdjacentHTML('beforeend', `<img src='${IMG.uristqwerty}'>`);
        }
      },
    },
    usergroups: {
      check_and_append: function(userdata, userid, username, div) {
        for(let groupname in usergroups) {
    			let group = usergroups[groupname];
          if(group.users[username]) {
          	div.insertAdjacentHTML('beforeend', `<img src='${group.icon}' title='${groupname}'>`);
          }
        }
      }
    },
    /*
    mcdev: {
      check_and_append: function(userdata, userid, username, div) {
        if(username && username.match(/^(ReikaKalseki|asiekierka|immibis|Vazkii|HellFirePvP|awoocent|McJty|mezz)$/)) {
          div.insertAdjacentHTML('beforeend', `<img src='${IMG.mc_moddev}'>`);
        }
      },
    },
    mc: {
      check_and_append: function(userdata, userid, username, div) {
        if(username == 'Delet3r' || username == 'Dinnerbone' || username == 'rockenroll4life' || username == '_Grum') {
          div.insertAdjacentHTML('beforeend', `<img src='${IMG.mc}'>`);
        }
      },
    },
    incrementaldev: {
      check_and_append: function(userdata, userid, username, div) {
        if(username == 'Eternal_Density' || username == 'Brownprobe' || username == 'astarsearcher' || username == 'dSolver') {
          let image_dat = ;
          div.insertAdjacentHTML('beforeend', `<img src='${IMG.incremental}'>`);
        }
      },
    },
    */
    dgn: {
      check_and_append: function(userdata, userid, username, div) {
        let name = username || (userdata && userdata.username);
        if(name && name.toLowerCase().search('dragon') != -1) {
          div.insertAdjacentHTML('beforeend', `<img src='${IMG.dragon}' title='🐲'>`);
        }
      }
    },
    tdnw: {
      check_and_append: function(userdata, userid, username, div) {
        if(userdata && userdata.trophies) {
          for(let i in userdata.trophies) {
            let trophy = userdata.trophies[i];
            if(trophy.name == 'Spared') {
              div.insertAdjacentHTML('beforeend', `<img src='${IMG.spared}'>`);
            } else if(trophy.name == 'Snapped') {
              div.insertAdjacentHTML('beforeend', `<img src='${IMG.snapped}'>`);
            }
          }
        }
      },
    },
    gilding: {
      check_and_append: function(userdata, userid, username, div) {
        if(userdata && userdata.trophies) {
          for(let i in userdata.trophies) {
            let trophy = userdata.trophies[i];
            if(trophy.name == 'Gilding I') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jVXTyXHbTBCGYaYjWxRmgMFCEoPBwk00aWIZANxk2o6AGSgMRaCjE9H5z+f9D5Ct0vHr6u6qfqp69HKzvNwsZSzYRV/5m19ulk10T53IT7VaCw6Z9y+Pnq8rmsSlyzyaxGWp7mhTxXU94bIIsUbyLRpTxYLfjxP2saCfh7SZz/N1xejnekKtBdtoTDkbY42knD1QzhwOuY81kvMy5JB5/FhFHDOPNpF0xbBk9GsTs506tJlPFTs0ieSpUDTG5TwPOC9CdlOHp0VAn7pUsUOX+1SxoIkdRi83y/eZgzUulRbsY4dDrqi0pE4kpyJgG405Lyd0meJYBFyWEetg8Bq93Cz7WLCfCS6LAGskK/+OYxHQ5wprXGotaFNFpQWnecCvTUyfuh+Ip3nIOvhKl7r0maIzEqsdai3YzxzOhWIb3nHIfer4gfMiosvfEbtM8bQIqbWgTlyqRNKnLl3q0mWKy7uBTSS1luymDqfC57wIOS9CRk/LkDIebm8zn0f/jjIWVLHDf38K3l4Nu8k9u+h+GCwUl9zDGok17mCwm4zpMsUhV7SpRxU7vL0a3l7NvyU2kTRa0OU+bR5wzL0PxG+TMbUWVEbRZx6tkZSxoDYum6nDj2VEnXp0maLPfdbBPd0nxMLnWPjUyTDYGI/GuKzDMaUW1ImkSwQ2kfSp4rKa0Bo5INZa0BrJKVc0yQD5febQZh6HwqdNXaxR2ERgU48mVZTTMda4lFoy2gRfuCxC+tyn1C5d5tNnikY7VFrSZz57LekyjzJxOa+mg0Pmc5qHg0GXeWyiMcd5iDUetXbojaTSAms8utSl0cMJ2+iep2XIz8fph8HzdUXz/qZ/8/N1xXbyQBU7n2p97tOaj77/AbWW29X1+ooUAAAAAElFTkSuQmCC';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding II') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjUlEQVQ4jVXTWXLaQBDGca7jBKwZ7YBGo4XNBIKWkcQakpyAG/gYnMCPvoiffZ9/HnBw+bG75uua/lV173oxXC+GIhKsw+/8r68XwzLsU8XyS69Sgm3q3Ove83lOHdu0qUMd28zcB5rE5bwYcpwGGC35EQ4oI8HfpyGbSNBNAprU4/k8p/d7MaRSglU4oBgPMFpSjB8pxhbbzMNoyWEWsE0dfs1DdqlDE0va/Dak92cZsRpZNKlHGVnUseSUu9Ta5jDxOUwD1iOL09SnS2zKyKLNPMpIUEcWvevF8HNsYbRNqQSbyGKbuZRKUsWSfe6zCgccZkPa1GWX+xxnIQv/5tW7XgybSLAZC45TH6Mlc++BXe7TZS5G21RK0CQupRLsJz5/lhFdYn8i7icBC/87bWLTpS6tlhhlUSnBZmxxyF1WwQPbzKOKHjlMQ9rsA7FNXU7TgEoJqtimjCVdYtMmNm3qcvwwMLGkUpL1yGKfexymAYdpQO80Cyii2+5N6vHkPVBEgjKyeH/NeXvRrId91mH/FsxdjpmD0RKj7ZvBejigTV22mUuTOJSRxduL5u1F34eYWFIrQZt5NJnPLnM+EX8MB1RKUGqXLnVotKSIBJW2WY4sfs1CqsShTV26zGPh92m/IOYeu9yjim/BWjvU2mYRDCiUuP/GxJIucTnOhzRa3hArJWi0ZJ+51LHg/TXn/TWnSR22uUeT2PdVTOJQJy7FaIDRNoWS9Jb+N47TgC7z7uH315xaWZRK0qUeGyVpU4citjnMRzeH1GM/CW4GbeqwDAfsJgFGO1TKotOSUgmMdmgTm1oJTCxZhX1Os4DfT6NPg+fznPrjTP/Xz+c5q+EjZWR96XWZR6M/3/0DYvXkmDjQfz0AAAAASUVORK5CYII=';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding III') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfUlEQVQ4jVWTSXLiQBREuY67jVWlGZBUGhhsDI2GksTYdPcJuIGPwQm85CJec5/XC2EcXtQiM+pn5X8R1TufNOeTJg8ES/8nn/p80sz9R8pIfvPKULBOrLvuvR1nVJFJk1hUkcnUfqCObY7PA/YTD60kr36fIhD8exmwCgTt2KNOHN6OM3p/ngeUoWDh98lHfbSS5KMn8pHBOnXQSrKbeqwTi98zn01iUUeSJutCen/nAYuhQZ04FIFBFUkOmU2lTHZjl93EYzk0OExc2tikCAya1KEIBFVg0DufNL9GBlqZFKFgFRisU5silJSRZJu5LPw+u+mAJrHZZC77qc+z2/HqnU+aVSBYjQT7iYtWkpnzwCZzaVMbrUzKUFDHNkUo2I5d/s4D2tj8grgdezy7P2likzaxaZREhwZlKFiNDHaZzcJ7YJ06lMETu4lPk94gNonNYeJRhoIyMikiyfWScb1kNInN/sbgeskoQ8lyaLDNHHYTj93Eo3eYeuRBt3udOLw4D+SBoAi6oY93xXLwyNJ/7AYzm31qoZVEK7NjsBz0aRKbdWpzvWQUgcHHu+LjXd1D9K1ZkzrUqcsmtb4gvg76lKGgUDZtYlErSR4ISmUyHxr8nvqUsUWT2LSp0wV9g5h1Znl7pVIWlTK5XjLyUNzb6EjSxjb72YBayQ5iGQpqJdmmNlUk7gDrxGKdOdSxeV9Fx1YXOuyjlUkeSnpz9wf7iXev9nmqsIPYJg6rUNIkFnlkspsNOw6Jw3bsdQyaxGLu99mMPbSyKEODVkmKUKCVRRObVKFAR5KF/8hh6vHnZfjF4O04o7p900/9dpyxGDxRBMY3r00davV17z+5ze+/VXOx2wAAAABJRU5ErkJggg==';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding IV') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAChUlEQVQ4jVXTSXLiTBCGYa7jbmNVaQYklQYGm4YfJJUkxqa7T8ANfAyfwBsiuIiXBPd5/4UwDi9qkRmlrPyeCHXejpq3o2YZCOb+Tz7rt6Nm6j9SRPJbrwgFq8S6153Xw4QyMqkTizIyGdsPVLHN4bnHbuShleSX3yUPBP9eeiwCQTP0qBKH18OEzp/nHkUomPldloMuWkmWgyeWA4NV6qCVZDv2WCUWvyc+68SiiiR11g7p/J0GzPoGVeKQBwZlJNlnNqUy2Q5dtiOPed9gP3JpYpM8MKhThzwQlIFB5+2o+W9goJVJHgoWgcEqtclDSRFJNpnLzO+yHfeoE5t15rIb+zy7rVfn7ahZBILFQLAbuWglmTgPrDOXJrXRyqQIBVVsk4eCzdDl7zSgic0vxM3Q49n9SR2bNIlNrSQ6NChCwWJgsM1sZt4Dq9ShCJ7Yjnzq9IZYJzb7kUcRCorIJI8k13PG9ZxRJza7m8H1nFGEknnfYJM5bEce25FHZz/2WAZt9ipxeHEeWAaCPGg/+nhXzHuPzP1HNpnD5RSzSy20kmhltgbzXpc6sVmlNtdzRh4YfLwrPt7VfYi+bVanDlXqsk6tL8RfvS5FKMiVTZNYXE4xy0BQKJPLKeb32OdyiqkTmyZ12kHfELO2WdxeKZVFqUyu54zLKb5voyPZRpj0qJRsEYtQUCnJJrUpI3EHvJxiVplDFZv3KDq2uJ4zlv0uWpksQ0ln6v5gN/Luq32eMmwRm8RhEUrqW7TtpN86JA6bodca1InF1O+yHnpoZVGEBo2S5KFAK4s6NilDgY4kM/+R/djjz0v/y+D1MKG8/aaf9ethwqz3RB4Y33pN6lCpr3v/AyRp938o8ONSAAAAAElFTkSuQmCC';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding V') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZUlEQVQ4jV2TW27iSBiF2U6mQ1zlO2C7cBlDQsOAjS9ch+5ZATvIMlhBJNRSNpIXpFb2882DGyeZh1LpP6pzdOorVed8KjifCpaBYO5/4zafTwVT/548kl+0PBSsY6udO8/HCavIpIotVpHJ2L6jHNocH3vsU49CSb77XbJA8O9Tj0UgqEceZezwfJzQ+fHYIw8FM7/LctClUJLl4IHlwGCtHQol2Y091rHFPxOfTWxRRpIqaUI6P6cBs75BGTtkgcEqkhwSm5Uy2Y1cdqnHvG9wSF3qoUkWGFTaIQsEq8Cgcz4V/D0wKJRJFgoWgcFa22ShJI8k28Rl5nfZjXtUsc0mcdmPfR7dhlfnfCpYBILFQLBPXQolmTh3bBKXWttcL5o8FJRDmywUbEcuP6cB9dD8gLgdeTy637heNHVsUylJERrkoWAxMNglNjPvjrV2yIMHrhdNpf9ArGKbQ+qRh4I8MrleNO+vCe+vCVVss0+9VstDybxvsE0cdqnHLvXoHMYey0BwvWjK2OHJueN60a3p7UUx790z9+/ZJg6/fw3Za4tCSQplNgzmvS5VbLPWNu+vCdeL5u1F8fai2pBbYKUdSu2y0dYHxO+9LnkoyFQD7fevYdvitj5r768J1ReIidPcMZJtg8/GW4Pb2k96lEo2EPNQUCrJVtusItEC/H+Lz8HLfrfZQ0ln6v7FPvWotdOaPxvr2GmeLbba0Eo7lLHDduQ1DKrYYup32Yw8CmWRhwa1kmShoFAW1dBkFQqKSDLz7zmMPX489T8YPB8nrP5809v8fJww6z2QBcYXrdYOpfo49x9eERAqI0SoBgAAAABJRU5ErkJggg==';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding VI') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNElEQVQ4jW2TWW4aQRiEuY5j49mYDWZhetiMITA7a7BzgXADjsEJIo0s+R5RXkayfJ3oywMYAvFDq1WtrvqrP6lr+23KfpsydWTG1i0fer9NGVp3xJ5ycRa7MrNAO+nabtMn8VTyQCPxVHqNG7J2g83AZtU1SX2FR6tO5Mh8f7CZODJFxyQLdHabPrWngU3syoysOtNWndRXmLbumbYkZkIn9RWWPZNZoPGtbzEPNDJPIQ8PIbXnocOoKZEFOpEjkXgK67BB4qssOwbLrsm4KbHuGhRtlciRyIVO5MgkjkRtv0352pJIfZXIlZk4EjPRIHIVqlKwCA1GVp1lzyYPGsxDg1XPYmAceNX225SJIzNpyay6Bqmv0NdvmIcGVSmoSkHsylSlIHJlFh2D56FD0VbPEBcdk4FxS1UKiqBxMn6sP79+MDJvDmHOPVUpyMURYh40WHdNYlcm9tQL03VQ7CqMmxKLUGfZNVl2TWrrnsnUOVTMAv0/02dtqlKQ+gqprx4YjO06+bH6+2t4YbjWVSnIhMFcaGeIj3b9BOqz6lUpeHtpX4TmFxBD/TTpeuLbS5vfP/2LJ6z6NpmvHCDGrkzmKyxEg8STeX8NeX8NLyZeB0+b9cPuKtSGxhdWXZNC6Cfzv8biCDYPtFNoLnSyQGfRMQ8M8kBjaNWZd0xSXyN2JQpfIXJlUl8jb6skrkzqKYysO9Y9k6eH5pnBbtMnOX7TD73b9BnZ90SOdHFWCJ3MP9/7C+SIJY4GsSKZAAAAAElFTkSuQmCC';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding VII') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACBklEQVQ4jXWTW27aQBSGvZ00IbbBN4KN8RgwobTB+EK4laQbgB2wDFZQyYqUfaC+WIqyHfT1AXMxah6ONP/RnP+f+caWtuuY7TpmaCv8sG456u06pm/dMWqqpd7IUXj2aictbZYBUbNK6tWImlW62g1JS2PZqzPvmMSuynerQmgr/H6s82QrjNsmiaezWQZIL706I0dhYFUYNirErsqwcU+eCZ6FTuyqzLomz16NX4HFxKuRNFVS/2AivfZtBg8yiacT2jJRU2Xha0RulVnbYNYxyTPBomOQZ4LQlkmFTmgrRLaMtF3H/GzIxG6V0FGKZI3QUckzwdQ3GFgV9rsVqacx8Q3mXYueceAlbdcxT7bCU0Nh3jGIXZVAv2G/W5FngjwTjArjY8Br32bcqp4hTtsmPeOWPBOMPe00eKz9bsXAPJgejVNRQEw9jUVxz8vUy/V1TX2dWcdk1jGRFl2Toa18OXTdO+rYVYnd6oFBngnS4uif735p4FrnmSARBhNRO0O8BPXV0T/eWiXTtATR109J14kfby3+/nFPxvvdinlQJ3HVA8SRo5C4asl9v1uVEr+6ytBRkfrGN+bFK3y++//deF2p0Ek8nWnbPDBIvRp5Jpi0zYKHzNhVTx9OngkiRyFuqgysO/JM8PL4cGawWQZExW961JtlwKB+T2jLpd5Y6CTued8/0sVCvlF6PAgAAAAASUVORK5CYII=';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding VIII') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABz0lEQVQ4jYWTbY6aUBSG2c506ggoghVELirW2o4IYseP0ukGdAcswxVMQibpPkz/kEy6HfP0h4Iw46Q/bnLfk3POe85zc6X9LmS/C5maMl+NW3K934WMjY/MukolNrNkvjuNQktJ7BF0VSKnQdBVGTZvyFJBPGqzHuiEtsIXo4Zvyvz63ObelFn0deaORhJ7SD9HbWaWzMSoMe3UCG2FaeeOLBVkqSC0FVZDnSwV/PAMHpwGWSqI3FMT6XFsMvlULwqCrsLGbRLYKqt+q4hvBqe7b9aJhIZvygRmHWm/C/nWqRPaKr4lFwW+pZClgqXbYmLUOB62RE6TB7fFemiQpeLEYL8LuTflysiedsPxsC1is3Pj3OBxbLLoqReIy77OqHVLlgoWTrMozFLB8bAtmpXvkThDjJwmm4FeJJQLy41en9VAZzXQkTZDnel5hbwogTeN8liuQ1shtNUTgywVROfR//52K06vdfkUEMug3hv95blX0VEFoqsVTmXHBHh57vHnya6AXHtt5rZygjizZOa2Uhn5eNi+cby2ytRSkMatD5Wka4nX1po7Gsu+fmHwv2d7F2ISeySxR3D+prlOYo9J+w7frFdiC6Exty95/wDOjF73zgXysQAAAABJRU5ErkJggg==';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name == 'Gilding IX') {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcElEQVQ4jY1TW26CQBSd7fShgC+g8hB8YK1teYzY1lrabkB2wDJYQRNi0n2Y/pCYbsecfigIFdSPSe659845957JkNCnCH0KU2JxL1whwaFPMRKuYStcLmfLLJ60eopJ4BlwlBpcrQ5HqWHQuEAc6fCGIl77PKjK4U6owJJYfN6KeJRYTHs8JloTgWeAvA9F2DKLsVCB2a6AqhzMdhVxpCOOdFCVw2zAI450vBkCnrU64kiH292SkI+RhPENk15wFC6NZ71WGs/729iSGLh6E5bEwpEYkNCneGjvCcrOZrU4yIU+3RIUNW1WCwTAUcLUxFPKCXESJzjwDBBXa5ROcGqdWZ8Hme8czhayo//PZYmpWst7EEc6fr+7R3GhieeMvl52zjMxqxgAWC87+PlSc0amdc8AsWX2gGCzWhwoFq1iyhzIqHWZUyxqLFvrpcfvTTz2bGVkqQeBZ8DZfdMEB56BsViFJTG53FRvYqLu+/4A/ZqC3RLM4vsAAAAASUVORK5CYII=';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            } else if(trophy.name.startsWith('Gilding X')) {
              let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGklEQVQ4jZ1TW07DMBD0eQDRFChppYQ05mEUgVRSFxAIGU6Q3MDH8AmQrErcI+InUsV1ouGHJHZejfjwx8zuzu7OykSlHCrlWHkO7ueHKLFKOaL5EeKLqcXFvoPn8LTCRAqGXNN/PSkYyPvtArmmKLKkM6nkJdDiN+EM5CPyeouGBHNNsfYmICrl9UiNLl2FpoBKuS1gBoss2Ss4ysQiS6zuJpaCgTyGZ70T7Fvn9doFebtxBx1vcqYwD05sD3JN8fN1OYjNV5k4ZvTddjnORLOjBLDbLvH9GXSeUQoGEvtOS6DIklbHpnCuKVb+FCQ6P7ACXTv3rfVy5dYmDp2tT6zyQAqG9d83LbEUDHeLYzx4E4t7ojNsgjrvF+LBpX0rV4x4AAAAAElFTkSuQmCC';
              div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.name}'>`);
            }
          }
        }
      },
    },
    months_of_gold: {
      check_and_append: function(userdata, userid, username, div) {
        if(userdata && userdata.trophies) {
          for(let i in userdata.trophies) {
            let trophy = userdata.trophies[i];
            if(trophy.name == 'reddit gold') {
              if(trophy.desc == 'Charter Member') {
                div.insertAdjacentHTML('beforeend', `<img src='${IMG.charter_member}' title='${trophy.desc}'>`);
              } else {
                let parts = trophy.desc.split(' ');
                let date = new Date();
                let month_diff = 12 * (date.getFullYear() - parts[2]);
                let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(parts[1]);
                month_diff += month - date.getMonth();
                let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVQ4jVXT22sjBRTH8fwpgiCbbZK5ZG5JZjKZSSZps4nJTOaSq+kW1M3WbWNxdVW0Ct7Ah7qwJSzoP+CDPoqvvsiifdCnXeqyrRdE8LUPEeTrQ7qWPv4O5xw4HzipxTxkMQ/pmiJtY42neTEPaRoZgrJ0qRZYIn0n/39O7U8b9MoysZOnV5apK2miisJ0vcDY0wltiWtGFt8U2doo0DFFkppO5KjsTxukNtcLBJZIy8jSLWUJbYluKUe3JNB3VUJbYlTX6Tt5XmgYDJw8UVkirq6WpK43TVpFgchR8U2BXlliUlXo2TKjmsbI02kXBSaeRlKR8U2B2FXxTZGeKZBazEOeLwmEtoxviXRMgb6r4FsSQVliWNVoGVlG9QKxozCoaozrBuvayiu1mId0TJFOSWTsaYS2RENNM6hqJK5CaMsElkhUUfAtkWFN43rTJKnIF4jDms66tkZckUkchdiWCC2BwBLplARGVYWWnqbvqgRmjpFnELvniLGjMPF0AkskKMv4ZYmkIhNXZGJHYXxuEJYlAkuiXRQYVlVGns7I00lN6jpdc3V75KhsqGm6pohvCgRmjnYhR7uQoW1kVoNVhbGbJ7QlQlteGbQLWWJH4bO3PP75ZZu/froJJ3Puvavz5T2Xs4cv8/uPL7I8nnHwpkfkagzc/AXitUKW5eM5nGzz5PsptwfPcHv4LAd7a9x97SqHb2S4/7bIn0eb/HE04+zRjPgSYlWF0z3+/nmb5fGM5fEOn7yS4buvfH74ZsynO2mOvk3gdBdOX2X5eJfIllaIgSUS2RIf3UzzxYc6Zw9vwOkOvz6Ywuku/z65BSe3OHs047cHmxzckTm8kyO0ZbqWRKqpXWXs6SSuylZL4vXxc7z/0hXuvlPk6/sbfP6xxeF7RT64cYWDvTW22jqxqxI5KsOavjKInTxNI8ugphPaeQJLILElfEsktPPEFZmeJRKWJVpGhkldZ3OjeGGwP23QO3/Tp3l/2qBVyOGbwqVa4qpE9kXff2mnCzgopsutAAAAAElFTkSuQmCC';
                if(month_diff > 36) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACX0lEQVQ4jZ2T3UtTARiHz58SBOF0c+dszrPNbcdNt+matI+zD3V2lmA6v3YSLUVqBX3SxTKUIdQ/0EVdRl12U1IS1o1iQ5d9EIh3u1gQTxfmbFdSl78f7/vw8sArlHSVkq4ScYn02Vs4yiVdJWQ3EvNIDV3MLZL2WutZKGhB4h4LSa+VuMdCoM1AorMNrcdBxi+jKhJn7SaiLpHhXgfnXCKpbpmE10ZBCyJkexzE3CJhu4lIhwlVkYh0tBLpMJP22VAVicGATNpr5XzQTr/XSsIjkew6hAgXQi7CTjPFhQA/P03wY2McdnWWr8k8WfZR3Rzly7sRats5igtdRF1mkj4bUZdI3GVGKOkqtbIOuxPsvNaY6z/F3MBpijMtLM02s3LFyOqiyPf1LF/Xc1S3cjxcDNLTfuhLKOkqVGbY/zBBbTtHbXuau5NGXj2N8vZ5hvvTBtZfpKCSh8olauV8HVSXeHvcwONbMtXNMahM83lNg0qeXztTsDtFdSvH3lqW4ryFlfnWOqigBRGS3jaG/DIHG2NczpzhxsUmlq46ebbay6M7blauO7k51kRxpoW9N9kG0KBfRhgKyNTKev2Kb2vaiaAHsyZq5TyqYml0cG/ScOLyx5fp+gV1iX87ONgYORGy/36UWjl/LHGgy/ZfDgpaECHmFkko0j87UBULEbeEEGpvJuOXSflsDIelE5eH+2SSPhsJr42BbvnQQdJrJWQ30d8toypWYm4zKUUi6hZRFSvJTgtxt4jqkQjbjQwFZLK9zmMHBS1I/M+bHuWCFiTsaCXqMjd0KZ+NhHI89xv/pUVTmVwgAwAAAABJRU5ErkJggg==';
                } else if(month_diff > 24) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcUlEQVQ4jZWT3UtTcRzGz58SBOF0c+dsHs82tx3PdE5t5l7OXnzrLMF0vm2JphC1gl4JMUEZQv0DXdRl1GUEJSVh3Si2dNkLgXi3iwXx6UKdebW6fL78vs/veT7wFfJZnXxWJ+QW6XLUcaTzWZ1Oh5mIVzoxi3hEkpq9ooWcESDqtRHX7ES9NtoaTMSaGzDanfT7FXRV4qzDQtgtMtjhpNstkmhViGkyOSOAkGp3EvGIBB0WQk0WdFUi1FRPqMlK0iejqxJ9bQpJzc75gIMezU7MKxFvOTARLnS6CbqsxDSZ+Tkfvz6N8XN9FHayLF1TeLzko7QxzNd3Q5S30szPasR9MmG3SNRtRchndc41WSkXsrAzxvZrg5meU8z0nmZhqo7F6VqWZ82sXBH5sZbi21qa0maa9sYDXkI+q9PtFqE4xd6HMcpbacpbk9wdN/PySZi3z/q5P2li7XkCihkoXqJcyJBoth1D7G1VuD1q4tEthdLGCBQn+bJqQDHD7+0J2JmgtJlmdzXFwpyN5bl64r5DiHGtgQG/AsUpPr8a5HL/GW5crGHxqounKx08vONh+bqLmyM1LEzVsfd+mHIhQ2kzTZ9fQRhoUygXsv+doFzIoKu2AwZH/e+Nm6om+PgiWTGpQPz79/31oX+ucQyxRWZ/faTq4u6b1IkaOSOAEPGIxFSpkuL7qlHV6MG0BV21EfJICJ2NtfT7FRI+mcGgVHV5sEsh7pOJaTK9rcoBg7hmp9NhoadVQVftRDxWEqpE2COiq3bizTaiHhHdKxF0mBloU0h1uI4Z5IwA0cMzPdI5I0DQWU/YbT0xS/hkYurxuz/ApUhTOgvu7QAAAABJRU5ErkJggg==';
                } else if(month_diff > 12) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfklEQVQ4jZWT3UtTARiHz58SBJHpPB/b8cztbMezT7WZ+zjb/Ng6S7Ccpi7RkqJW0BdEmKCMoP6BLuoyuu2mpCTsKjHJZR8E0t0uFsTTxXTqVXX5+/G+Lw8PvEKlZFEpWcR1iT53K3u5UrLodbeR9MuHuqRPYsB0NrNQtqOk/AoZ00nKrxBxtZDucmF3d5ILa1iGzEm3g4QuMdLTSb8ukQ1ppE2Vsh1FKHR3kvRJxNwO4l4HliET97YT94oMBFQsQ2Y4ojFgOjkddTNoOkn7ZTLBxhHhTK9OzCOSNlUSukjKL5MPukgZCsOhDobDGn0ekXy4g2yXQkIXyQRUErpEShcRKiWLU14Ry1C4Px/k18cJfqyNw1aJpWsaT5YC1D6c48vbUeobRR5cDpOLuOnuaPgSKiWLfl2ivlmCrQk+vbKZGzzC3NBRFmZaWZw9wfKlNh5ekfi+WuDrapHaepFsl7IvcSikQXWGnfcT1DeK1DemuHu+jZdPE7x5nuPeVAurL7JQnYbqBeqb02QCuxIzpot8WOP2eAuPb2nUPoxBdYrPKzZUp/n9aRK2JqmtF9leKbAwr7A8305tvchwWEPIR7Qm/s+1MS7mjnHj7HEWr3p49rCHR3d8LF/3cHPsOAszrey8G21SWIbScLCH/78UTYkHF3+ujf4DxTnqm9MHJAbVf8Lffl04RFC2owhJn0TakJsU31bsvx56MOvAMhTiPhmht+MEubBGNqAyEpP/ujzSp5EJqKRNlaGQ1nCQMZ30uh0MhjQsw0nSJ5I1ZBI+CctwkulSSPkkLL9MzN1GPqJR6PHsOyjbUVK7b7qXy3aUWGc7CV081GUDKmljf+4PjLxCsevol4kAAAAASUVORK5CYII=';
                } else if(month_diff > 6) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jZWTzWsTCRjG508RFsTapvORTGaSzGQ6+WxjajPJZNI2iRMLuo3dtrH4haJR8As81IolCO4/sIfd47JXL1psD3pSumKzriuCeOshgvz2kH7QU/H4vLzv87zvD16h03LptFwKhsS4Psiu7rRccvoQxbh8oFY0JSbt4J4W2n6WUlzBs4OU4gqZ0ADlkRD+aIRaWsO1ZE7oARxDYmYswoQhUUlplG2Vtp9FaIxGKJoSeT1AIRbAtWQKsWEKMZHJhIpryVQzGpN2kFNZnSk7SDku4yX7JsLpnEE+KlK2VRxDpBSXqSdDlCyFaipMNa0xHhWpp8NURhQcQ8RLqDiGRMkQETotl5MxEddScEyJCUNkMhHCMWWKcZnpZJi8HqCaieDZIaaSYWoZndFwn5fQablMGBITMYlH1zJ8+3uOz6/OwVaLxzc0fnucYPvNz/y7fobeZpOVq2lO5wwqI8o+xOmURu9dC7bmeP/c5+LUES5O/8Ty0iArF46zenmIJ9ckPm00+LjRZPttEy+xA9GzQ9TTGnSX+PJ6jt5mk97mAvd/GeLZ7w4v/6zxYGGAjb8q0F2E7nl67xappjWqaQ2hnumn3z03wK93NLbfzEJ3gX/WfOgu8v39PGzNs/22yYe1BstXFFavDONaMq6l9Bnspn9eb3CpdpRbZ4+xcj3KH0/GeHrPZPVmlNuzx1heGuTT+pm9M/Yg/mj67hn7EJMqX1/NHpr+4UXjgFHbzyIUTYmyJe9t8d+af6jRwwsBXEuhYMoIufBxammNSkJlJi8fOjwzruElVMq2ynRK6zPw7CA5PcBUSsO1ghRNkYol45gSrhXEG1EomRJuXCavD1HPaDTGovsM2n6W0s6b7uq2nyUfGcYxxAO1SkKlbO33/Q9+ajhwLp0QSAAAAABJRU5ErkJggg==';
                } else if(month_diff > 3) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvklEQVQ4jZWTS2sbZxSG56cUCiWOLc9FmoukGY1mpJFsRa410qeRdXHHMaSJ4sZWTZImhFQt9EoXTkqMCLR/oJR2Wbor3RTTutCuEtwQq82FQLdeqFCeLpzYeBW6fA/nPTw8cKTRQDAaCGq2woI1zYs8Gggq1gz1nHpiVncUlrzkUZaGcZlGTiPykjRyGqXUFM18inguTS8wEa7KGStBaCuszqdZtBVaRZOmpzOMy0grc2nqjkLVSlDLJhCuSi07Sy0rs+TrCFelWzJZ8pK8UbZoe0maOZWocHhEOluxqWZkmp5OaMs0cirLhRQNV6NbNOgGJgsZmeXAoJXXCG2ZyNcJbYWGLSONBoLXszLC1QgdhUVbZslPEToq9ZxKp2BQtRJ0S2kiL0W7YNArWcwZh76k0UCwaCssZhV6gYFwVcr6FO2CQctPIVyNuqPQzKcIHYVO0eBsxaaV144ldoomn17N888fazz77SLsD7jzrslXd3wO7p3n0S/nmOz1uXU9oG7P0g0sIv+5xMhLMXkwgP01Hv4Uc6X9Clc6r7K1Oc3ty6fZfmeGuzcUnu6u8Hi3z8H9Pp2CTjcw6QYm0nLJhPEmf/++xmSvz2RvnU/emuHHb0J+/q7HZ+tT7H7fgvEGjN9m8mCDz68XEa6KcLVDBx9dnOLLD00O7l2A8Tp/7sQw3uDfh5dg/xIH9/v8tbPC1jWN7WuzRyRHEs+kEzz79TxXe6/x/punuH0zw7d35/niY4ft9zJ8cOEUW5vT/PB17QTJscSCDuPN/00yjMtIdUeh6apH5Sc78UtJbl1OIFyNmqMiVYzT9AKTlq+zWlVfWl5dMIl8naan0ymahw4iL0nFStAumgg3Sd2RabkqoaMg3CRRXqPhKIicStWaYblksjKfOXYwjMs0nr/pizyMy1TTs4S2fGLW8nWa7vHef/UZLrEQm44cAAAAAElFTkSuQmCC';
                } else if(month_diff > 1) {
                  image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC00lEQVQ4jZXTzWsjdRzH8fwpgiCbbdN5yDwlmclkJpmkzaYmM5nM5NFkC6ubrdvG4mpRtAo+gUgpbAkL+g940KN49SKL7UFPu9SyjbosC157iCBvD9nduifx+Pny5ffh+4JfYjoJmU5CGqbIurHE0zydhFSNZYK89NwssETaTvpZTuwNKzTzMpGTppmXKStJWgWF4WqGvqcT2hJXjBS+KbKxlqFuisQlnZajsjeskBitZggskZqRopFLEdoSjdwKjZxA21UJbYleWaftpHmlYtBx0rTyElFx8UjiatWklhVoOSq+KdDMSwyKCk1bplfS6Hk661mBgacRF2R8UyByVXxTpGkKJKaTkJdzAqEt41sidVOg7Sr4lkSQl+gWNWpGil45Q+QodIoa/bLBqrbwSkwnIXVTpJ4T6XsaoS1RUZN0ihqxqxDaMoEl0ioo+JZIt6RxtWoSF+QLxG5JZ1VbIirIxI5CZEuElkBgidRzAr2iQk1P0nZVAnOFnmcQuU8QI0dh4OkElkiQl/lit8Rfv27y+OcbcDbh9vs6X992Ob/3Gn8cXWN+MubgHY+ep9PzdBKDsk7DXNw+P53A2SYPfhxyq/MCt7ovsr+zxMGblzl8e5k774o8Oh7x8HjM+f0xoS0vDNYzKSJHgdkOf/6yyfxkzPxki89eX+aHb3x++q7P51tJjr+PYbYNszeYn25fIF7JpJifTvjkRpKvPtY5v3cdZlv8dncIs23+fnATzm5yfn/M73dH7O/KHO6u/AuxqD5rf3w04q3+S3z46iUO3svy7Z01vvzU4vCDLB9dv8T+zhKPjq7RsqUFYmCJtGzpf7eHtkzDkkhUtcv0PZ3YVdmoSf/ZvrGuE7kqLUelW9IXBpGTpmqk6JR0QjtNYAnEtoRviYR2mqgg07REwrxEzVhmUNYZrWUvDPaGFZpPvunTvDesUMus4JvCc7PYVWnZF3v/ANMKI37+pfN2AAAAAElFTkSuQmCC';
                }
                div.insertAdjacentHTML('beforeend', `<img src='${image_dat}' title='${trophy.desc}'>`);
              }
            } else if(trophy.name == 'Charter Member') {
              // Yes, this means a user *might* have double charter member. If they do, they certainly deserve it!
              div.insertAdjacentHTML('beforeend', `<img src='${IMG.charter_member}' title='${trophy.desc}'>`);
            }
          }
        }
      }
    },
    nodata: {
      check_and_append: function(userdata, userid, username, div) {
        if(!userdata) {
          div.classList.add(`uq_nodata-${userid}`);
          let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVQ4jWNggILOzs4GUjADOujs7Gw4f/48UZg+Bri5uaFgkgxA14xuCNEG4OKTHAYUGUCWF/BpJsuAgUkHVHHBwHuBZAPIyc4ATmnaNJpibF8AAAAASUVORK5CYII=';
          let img = document.createElement('img');
          img.src = image_dat;
          img.addEventListener('click', function(){
            let query = document.querySelectorAll(`.uq_nodata-${userid}`);
            for(let i = 0; i < query.length; i++) {
              query[i].remove();
            }
            manual_requests[username] = userid;
            let url = `https://www.reddit.com/user/${username}/trophies.json?raw_json=1`;
            let req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();
          });
          div.insertAdjacentElement('beforeend', img);
        }
      }
    },
    staledata: {
      check_and_append: function(userdata, userid, username, div) {
        if(userdata && Date.now() - userdata.cached_on > 7 * 24 * 60 * 60 * 1000) {
          div.classList.add(`uq_staledata-${userid}`);
          //let image_dat = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASklEQVQ4jWNggILOzs4GUjADOujs7Gw4f/48UZg+Bri5uaFgkgxA14xuCNEG4OKTHAYUGUCWF/BpJsuAgUkHVHHBwHuBZAPIyc4ATmnaNJpibF8AAAAASUVORK5CYII=';
          let img = document.createElement('span');
          img.innerText = '(stale)';
          img.addEventListener('click', function(){
            let query = document.querySelectorAll(`.uq_staledata-${userid}`);
            for(let i = 0; i < query.length; i++) {
              query[i].remove();
            }
            stale_userdata[userid] = true;
            let url = `https://www.reddit.com/user/${username}/trophies.json?raw_json=1`;
            let req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();
          });
          div.insertAdjacentElement('beforeend', img);
        }
      }
    }
  };
  let loaded_userdata = {};
  let no_userdata = {};
  let pending_userdata = {};
  let loaded_pending_userdata = [];
  let pending_nodata = [];
  let manual_requests = {};
  let stale_userdata = {};

  let cache_userdata = function(name, userid, trophies) {
    let dat = {
      username: name,
      trophies: trophies,
      cached_on: Date.now(),
    };
    if(!userid && manual_requests[name]) {
      userid = manual_requests[name];
    	loaded_userdata[userid] = dat;
    	let query = document.querySelectorAll(`.uq_nodata.id-t2_${userid}`);
      for(let i = 0; i < query.length; i++) {
      	add_userdata(query[i], userid, name);
      }
    }
    if(userid) {
    	loaded_userdata[userid] = dat;
      localStorage.setItem(`uq-userdat-v0-${userid}`, JSON.stringify(dat))
      if(stale_userdata[userid]) {
        stale_userdata[userid] = false;
        let query = document.querySelectorAll(`.uq_found.id-t2_${userid}`);
        for(let i = 0; i < query.length; i++) {
          add_userdata(query[i], userid, name);
        }
      }
    } else if(name) {
      localStorage.setItem(`uq-userdat-v0-noid-${name}`, JSON.stringify(dat))
    }
    //console.log(`cache_userdata(${name}, ${userid}, ${JSON.stringify(trophies)})`);
  };

  let add_userdata = function(elem, userid, username) {
    if(loaded_userdata[userid]) {
      let div = document.createElement('div');
      div.style.display = 'inline-block';
      div.style.verticalAlign = 'middle';
      div.classList.add(`uq_icondiv-${userid}`);
      username = username || loaded_userdata[userid].username || null;
      for(let i in tag_criteria) {
        tag_criteria[i].check_and_append(loaded_userdata[userid], userid, username, div);
      }
      elem.nextSibling.insertAdjacentElement('afterend', div);
    } else if(no_userdata[userid]) {
      let div = document.createElement('div');
      div.style.display = 'inline-block';
      div.style.verticalAlign = 'middle';
      div.classList.add(`uq_icondiv-${userid}`);
      for(let i in tag_criteria) {
        tag_criteria[i].check_and_append(null, userid, username, div);
      }
      elem.nextSibling.insertAdjacentElement('afterend', div);
    } else if(pending_userdata[userid]) {
      elem.classList.add('uq_data_pending');
	  } else if(!pending_userdata[userid]) {
    	//console.log(`schedule userdata lookup (${userid})`);
      elem.classList.add('uq_data_pending');
      pending_userdata[userid] = {name:username};
    }
  }

  let insertion_scan = function() {
    if(!contextMenu.parentElement) {
      init_groups();
    	document.body.insertAdjacentElement('beforeend', contextMenu);
    }
    let data_fetched = false;
    let query = document.querySelectorAll('a.author:not(.uq_found)');
    for(let i = 0; i < query.length; i++) {
      let author = query[i];
      let userid = null;
      for(let j = 0; j < author.classList.length; j++) {
        if(author.classList[j].startsWith('id-t2_')) {
          userid = author.classList[j].substring('id-t2_'.length);
          break;
        }
      }
      author.classList.add('uq_found');
      let usermatch = author.href.match(/reddit.com\/user\/([^/?]+)/);
      let username = (usermatch && usermatch[1]) || null;
      if(userid && username) {
      	author.dataset.uq_userid = userid;
      	author.dataset.uq_username = username;
      	author.addEventListener('contextmenu', ev => set_context_target(ev.target));
        author.setAttribute('contextmenu', 'uq_usericon_contextmenu')
      }
      add_userdata(author, userid, username);
    }
    for(let userid in pending_userdata) {
      let dat = localStorage.getItem(`uq-userdat-v0-${userid}`);
      if(dat === null) {
        let username = pending_userdata[userid].name;
        dat = localStorage.getItem(`uq-userdat-v0-noid-${username}`);
        if(dat === null) {
          no_userdata[userid] = true;
          pending_nodata.push({id:userid, name:username});
        } else {
          loaded_pending_userdata.push(userid);
          loaded_userdata[userid] = JSON.parse(dat);
          localStorage.removeItem(`uq-userdat-v0-noid-${username}`);
          localStorage.setItem(`uq-userdat-v0-${userid}`, dat);
        }
      } else {
        loaded_pending_userdata.push(userid);
        loaded_userdata[userid] = JSON.parse(dat);
      }
    }
    pending_userdata = {};
    while(loaded_pending_userdata.length) {
      let userid = loaded_pending_userdata.pop();
    	let query = document.querySelectorAll(`.uq_data_pending.id-t2_${userid}`);
      for(let i = 0; i < query.length; i++) {
        let author = query[i];
        author.classList.remove('uq_data_pending');
        add_userdata(author, userid, null);
      }
    }
    while(pending_nodata.length) {
      let dat = pending_nodata.pop();
      let username = dat.name;
      let userid = dat.id;
    	let query = document.querySelectorAll(`.uq_data_pending.id-t2_${userid}`);
      for(let i = 0; i < query.length; i++) {
        let author = query[i];
        author.classList.remove('uq_data_pending');
        author.classList.add('uq_nodata');
      	add_userdata(author, userid, username);
      }
    }
    setTimeout(function(){requestAnimationFrame(function(){setTimeout(insertion_scan)})}, data_fetched? 100 : 60 * 1000);
  }
 
	let orig_xhr = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url) {
    /*
    let usermatch = (''+window.location).match(/reddit.com\/user\/([^/?]+)/);
    if(usermatch && usermatch[1]) {
      let username = usermatch[1];
    */
    let trophies_match = url.match(/reddit.com\/user\/([^/]+)\/trophies.json/);
    if(trophies_match && trophies_match[1]) {
      let username = trophies_match[1];
      this.addEventListener('load', function(ev) {
        let dat = JSON.parse(ev.target.response);
        let trophies = [];
        for(i in dat.data.trophies) {
          let trophy = dat.data.trophies[i].data;
          trophies.push({name: trophy.name, desc: trophy.description});
        }
        cache_userdata(username, null, trophies);
      }, false);
    }
    return orig_xhr.apply(this, arguments);
  }
 
  window.addEventListener('DOMContentLoaded', function(){
    let usermatch = (''+window.location).match(/reddit.com\/user\/([^/?]+)/);
    if(usermatch && usermatch[1]) {
      let name = usermatch[1];
      //console.log(`On userpage for ${name}`)
      let old_userpage_acct_info = document.querySelector('.titlebox > .bottom > a[data-type="account"]');
      if(old_userpage_acct_info) {
        let userid = old_userpage_acct_info.attributes['data-fullname'].nodeValue.substring('t2_'.length);
        //console.log(`On old userpage for ${name} (${userid})`)
        //let age = document.querySelector('.titlebox > .bottom > .age > time').attributes['datetime'].nodeValue;
        //console.log(`On old userpage for ${name} (${userid}, since ${age})`)
        let trophies = [];
        let trophyNodes = document.getElementsByClassName('trophy-info');
        console.log(trophyNodes);
        for(i = 0; i < trophyNodes.length; i++) {
          let trophy_name = (trophyNodes[i].querySelector('.trophy-name') || {innerText:''}).innerText;
          let trophy_desc = (trophyNodes[i].querySelector('.trophy-description') || {innerText:''}).innerText;
          trophies.push({name: trophy_name, desc: trophy_desc});
        }
        cache_userdata(name, userid, trophies);
        //console.log(`On userpage for ${name} (${userid}, has trophies ${JSON.stringify(trophies)})`)
      }
    }
    setTimeout(function(){requestAnimationFrame(insertion_scan)}, 1);
  });
}).toString() + ')()';
if(document.head) {
	document.head.insertAdjacentElement('afterbegin', script);
} else {
  let observer = new MutationObserver(function(){
		document.head.insertAdjacentElement('afterbegin', script);
    observer.disconnect();
  });
  observer.observe(document, {childList: true, subtree: true});
}

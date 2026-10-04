const VERSION = "2026.10.02-facilitator-record.1";
const REG = {
  exercise: { label: "33 CFR 101.635(c) (annual exercise)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-101/subpart-F/section-101.635" },
  definitions: { label: "33 CFR 101.615 (reportable incident definition)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-101/subpart-F/section-101.615" },
  cyso: { label: "33 CFR 101.620 (CySO duties)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-101/subpart-F/section-101.620" },
  immediate: { label: "33 CFR 6.16-1 (immediate notification)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-A/part-6/subpart-6.16/section-6.16-1" },
  nrc: { label: "33 CFR 101.650(g)(1) (NRC reporting route)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-101/subpart-F/section-101.650" },
  records: { label: "33 CFR 101.640 (cybersecurity records)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-101/subpart-F/section-101.640" },
  facility: { label: "33 CFR 105.225 (facility recordkeeping)", url: "https://www.ecfr.gov/current/title-33/chapter-I/subchapter-H/part-105/subpart-B/section-105.225" }
};

const stages = [
  {
    "tag": "01 · Recognize",
    "title": "An unexpected access prompt",
    "story": "At the start of the shift, an operator notices an unexpected remote access prompt on a workstation supporting transfer coordination. The contractor account is known, but the operator did not request access. No incident or operational impact has been confirmed.",
    "facts": [
      "Unexpected access prompt",
      "Contractor account",
      "Cause and scope unknown"
    ],
    "question": "What does the operator do first, and what should they record?",
    "options": [
      "Check the contractor work window with the shift lead, preserve the prompt and time, and prepare an IT or OT handoff once that check establishes whether access was expected.",
      "Raise the unexpected prompt with local IT or OT and the shift lead now, preserve the observed facts, and verify the contractor work window alongside qualified triage.",
      "Create a ServiceNow incident with the prompt and workstation details, preserve the display, and use the ticket queue to arrange IT triage while the shift lead checks scheduled work."
    ],
    "guide": "A potentially unauthorized remote access indication should reach local IT or the OT Focal Point promptly, alongside the shift lead. Do not wait for contractor confirmation or assume a ticket alone creates an immediate handoff. Preserve what was seen and avoid improvised isolation of critical OT. A single prompt does not yet settle the external reporting threshold.",
    "criteria": [
      "Identified suspicious access and separated known facts from uncertainty",
      "Made a prompt handoff to local IT or OT and the shift lead",
      "Preserved observations without improvised changes to critical systems"
    ],
    "refs": [
      "definitions",
      "cyso"
    ],
    "strongest": 1,
    "rationale": "B is stronger because the unexpected request warrants a prompt local IT or OT and shift-lead handoff while contractor verification proceeds in parallel. A’s schedule check is useful when it accompanies the handoff, but is weaker here because it delays that handoff. C’s ticket is useful documentation, but a queue alone does not demonstrate immediate coordination. Apply the terminal’s approved access and incident procedure.",
    "examples": [
      "States that the account is known and the access request was not expected, but compromise and impact are unconfirmed.",
      "Speaks a simulated handoff naming the local IT or OT role and shift lead, including workstation, time and observation.",
      "Records the prompt and timestamp and refers changes to qualified personnel rather than disconnecting critical equipment independently."
    ],
    "video": "assets/videos/inject-1.mp4"
  },
  {
    "tag": "02 · Coordinate",
    "title": "The signal becomes credible",
    "story": "Local IT confirms an active session using the contractor account outside an approved work window. The contractor says it did not initiate the session. The OT Focal Point sees a brief discrepancy in a transfer status display while independent readings are being checked. The session's reach and the display's cause remain under investigation.",
    "facts": [
      "Unapproved session confirmed",
      "Conflicting display",
      "Independent readings pending"
    ],
    "question": "Who coordinates the response, what resources are needed, and how does Vopak escalate?",
    "options": [
      "Coordinate Operations and qualified IT or OT verification, preserve evidence, and make the GLAS, leadership, CySO and FSO handoffs under the approved procedure while recording facts in ServiceNow.",
      "Coordinate Operations and qualified IT or OT verification, preserve evidence, and prepare the GLAS, leadership, CySO and FSO handoffs for release once the session’s OT reach is established.",
      "Coordinate Operations verification and contractor account containment, preserve available evidence, and use the vendor’s findings to initiate GLAS and security-role handoffs through ServiceNow."
    ],
    "guide": "This stage tests handoffs, response authority, and resource availability. Identify who can safely contain access, how Operations validates process state, how GLAS is reached for a critical or highly probable attack, who contacts the Terminal Manager, CySO and FSO, and how ServiceNow records facts. Vendor assistance may help, but it does not replace Vopak's own escalation. Test whether the needed people and approved routes are available.",
    "criteria": [
      "Operations and qualified IT or OT coordinated safe response and verification",
      "Team demonstrated GLAS P1, leadership, CySO, FSO, and ServiceNow handoffs",
      "Team identified people, alternate communications, or other response resources needed"
    ],
    "refs": [
      "exercise",
      "cyso"
    ],
    "strongest": 0,
    "rationale": "A is stronger because the unapproved active session and unexplained display discrepancy support coordination and escalation while reach is investigated. B’s scope check is appropriate within the coordinated response, but should not become a prerequisite for the relevant handoffs. C’s vendor support can assist authorized containment, but does not replace Vopak escalation and qualified IT or OT coordination. Use the current Vopak guideline and terminal procedure.",
    "examples": [
      "Operations requests an independent process check while qualified IT or OT coordinates authorized access containment.",
      "Team names or speaks the GLAS critical incident route, leadership, CySO and FSO handoffs and the ServiceNow record.",
      "Team identifies the authorized Operations decision-maker, qualified responder and available verification or communication resource."
    ],
    "video": "assets/videos/inject-2.mp4"
  },
  {
    "tag": "03 · Notify",
    "title": "The reporting decision",
    "story": "Cybersecurity confirms unauthorized access to a terminal support system. Transfer status information may be unreliable, and the event could affect the terminal's ability to coordinate vessel service. The precise reach and impact are still being investigated. The CySO and FSO must make and communicate the initial reporting decision using the approved facility procedure.",
    "facts": [
      "Unauthorized access confirmed",
      "Integrity uncertain",
      "Potential vessel-service impact",
      "Investigation ongoing"
    ],
    "question": "What does the CySO decide and communicate now? Give a concise simulated initial report.",
    "options": [
      "Prepare the known facts and uncertainties with the CySO and FSO, simulate NRC notification first, and then determine the other recipients using the approved reporting procedure.",
      "Prepare the known facts and uncertainties with the CySO and FSO, notify the approved Coast Guard contact, and defer other recipients until the investigation confirms operational impact.",
      "Prepare the known facts and uncertainties with the CySO and FSO, assess both reporting provisions now, and simulate each applicable recipient and timing under the approved reporting procedure."
    ],
    "guide": "33 CFR 6.16-1 (immediate notification) calls for immediate reports to FBI, CISA for cyber incidents, and the COTP or representatives when there is evidence of an actual or threatened cyber incident involving or endangering a vessel, harbor, port or waterfront facility. 33 CFR 101.615 (reportable incident definition) includes an incident still under investigation that could reasonably lead to specified impacts. 33 CFR 101.650(g)(1) (NRC reporting route) requires a reportable incident to go to the NRC without delay if it has not been reported under 33 CFR 6.16-1 (immediate notification) or the entity is not subject to that route. Assess the applicable routes together rather than assuming one recipient replaces the others. Have the CySO speak the initial report, name what is unknown, and use the approved facility procedure.",
    "criteria": [
      "CySO actively evaluated 33 CFR 6.16-1 (immediate notification) and recipients",
      "CySO assessed 33 CFR 101.615 (reportable incident definition) and the conditional NRC route",
      "CySO delivered a simulated initial report with known facts and unknowns"
    ],
    "refs": [
      "immediate",
      "definitions",
      "nrc",
      "exercise"
    ],
    "notify": true,
    "strongest": 2,
    "rationale": "C is stronger because it assesses the immediate notification provision and the conditional NRC route without waiting for complete impact confirmation. A’s NRC route can be appropriate when its condition applies, but NRC-first is not a universal substitute for the recipients required by the immediate notification provision. B’s Coast Guard contact may be an approved representative, but waiting for confirmed operational impact can omit or delay other applicable recipients. Use the approved reporting procedure to verify routes and recipients.",
    "examples": [
      "CySO explains the immediate notification trigger and names FBI, CISA and COTP or their respective representatives.",
      "CySO assesses potentially reportable impacts and explains when the conditional NRC route is needed.",
      "CySO speaks a simulated initial report containing known access facts, possible service effect and investigation unknowns."
    ],
    "video": "assets/videos/inject-3.mp4"
  },
  {
    "tag": "04 · Respond",
    "title": "Protect the operation and resources",
    "story": "The remote session has been contained by qualified personnel. Operations' independent check does not yet reconcile the status display, and the transfer is approaching its planned window. A trusted alternate verification route is available, but the cause and restoration time are not known. Terminal leadership asks for a recommendation and a stakeholder update.",
    "facts": [
      "Access contained",
      "Display not trusted",
      "Alternate check available",
      "Transfer window approaching"
    ],
    "question": "How do you coordinate the operational decision, resources, and follow-up communication?",
    "options": [
      "Use independent verification for the Operations and leadership decision, coordinate recovery and evidence resources, and issue stakeholder and reporting updates after the technical cause is confirmed.",
      "Use independent verification for the Operations and leadership decision, coordinate recovery and evidence resources, and issue stakeholder and reporting updates as material facts develop.",
      "Use restoration of the workstation display as the basis for the Operations and leadership decision, coordinate technical recovery resources, and issue stakeholder updates once normal readings return."
    ],
    "guide": "The operational decision belongs to authorized terminal leadership and Operations under the approved plan, informed by verified process conditions. Cyber responders should not independently decide vessel or transfer operations, and a technical reset should not be treated as proof of trustworthy process state. Test the availability of a verification route, qualified IT or OT, communications, evidence, and continuity resources. The CySO's notification and coordination responsibilities continue as material facts develop.",
    "criteria": [
      "Authorized Operations and leadership made the simulated decision using verified information",
      "Team identified continuity, evidence, recovery, and communication resources",
      "CySO coordinated a simulated update as the incident facts changed"
    ],
    "refs": [
      "exercise",
      "nrc"
    ],
    "strongest": 1,
    "rationale": "B is stronger because verified process conditions support the authorized Operations and leadership decision, while communications follow material facts. A’s independent check and recovery coordination are useful, but root-cause confirmation should not gate needed updates. C’s restoration can support recovery, but a restored display alone does not prove trustworthy process state. Use the approved continuity and safety procedure.",
    "examples": [
      "Operations and terminal leadership make a simulated recommendation using independent verification and the approved procedure.",
      "Team assigns qualified recovery and evidence tasks and identifies the trusted verification and continuity resources.",
      "CySO speaks an update using changed facts and the team names an owner for needed follow-up."
    ],
    "video": "assets/videos/inject-4.mp4"
  }
];

const $ = id => document.getElementById(id);
const escapeHtml = v => String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
const screens = ["coverView","detailsView","contextView","exerciseView","closeoutView","reportView"];
const substeps = ["injectStep","decisionStep","compareStep","observeStep","notifyStep"];
const statusNames = {demonstrated:"Demonstrated",prompted:"Prompted",missing:"Not demonstrated",na:"Not applicable"};
const state = {config:{},stage:0,step:0,responses:stages.map(s=>({text:"",option:"",guide:false,notes:"",criteria:s.criteria.map(()=>"")})),logs:[],startedAt:null,endedAt:null,phase:null,phaseSince:null,durations:[0,0,0,0,0]};
const localDate = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;};
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";
const stamp = ms => ms ? `${new Date(ms).toLocaleString()} (${timeZone})` : "Not recorded";
const duration = ms => {const seconds=Math.max(0,Math.round(ms/1000));return `${String(Math.floor(seconds/3600)).padStart(2,"0")}:${String(Math.floor(seconds%3600/60)).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;};
$("exerciseDate").value=localDate();

function show(id){if(id!=="exerciseView")$("injectVideo").pause();screens.forEach(s=>$(s).hidden=s!==id);window.scrollTo(0,0);}
function track(next){if(state.phase!==null)state.durations[state.phase]+=Math.max(0,Date.now()-state.phaseSince);state.phase=next;state.phaseSince=Date.now();}
function saveCurrent(){if(state.phase===null)return;const r=state.responses[state.stage];r.text=$("teamDecision").value;r.notes=$("stageNotes").value;const choice=document.querySelector('input[name="approach"]:checked');if(choice)r.option=choice.value;document.querySelectorAll("#stageCriteria select").forEach((el,i)=>r.criteria[i]=el.value);}
function renderLogs(){$("logList").innerHTML=state.logs.length?state.logs.map((l,i)=>`<div class="log-item"><div><strong>${escapeHtml(l.to)}</strong> · ${escapeHtml(l.time)}<br><small>${escapeHtml(l.who)} · ${escapeHtml(l.method||"Method not recorded")}</small></div><button type="button" data-remove="${i}">Remove</button></div>`).join(""):'<p class="hint">No simulated contacts recorded.</p>';}
function renderStage(){const s=stages[state.stage],r=state.responses[state.stage];$("stageTag").textContent=s.tag;$("stageTitle").textContent=s.title;$("stageStory").textContent=state.stage===0?`At the start of the shift, ${state.config.vessel}. An operator notices an unexpected remote access prompt on ${state.config.system.toLowerCase()}. The contractor account is known, but the operator did not request access. No incident or operational impact has been confirmed.`:s.story;$("stageFacts").innerHTML=s.facts.map(f=>`<span>${escapeHtml(f)}</span>`).join("");$("stageQuestion").textContent=s.question;$("teamDecision").value=r.text;$("stageNotes").value=r.notes;$("assessmentPrivate").open=false;const video=$("injectVideo");if(video.getAttribute("src")!==s.video){video.pause();video.src=s.video;video.poster=`assets/videos/inject-${state.stage+1}.jpg`;video.load();}$("videoLabel").textContent=`Inject ${state.stage+1}`;
  $("options").innerHTML=s.options.map((o,i)=>`<label class="option"><input type="radio" name="approach" value="${i}" ${r.option===String(i)?"checked":""}><span>${escapeHtml(o)}</span></label>`).join("");
  $("guide").innerHTML=`<p>${escapeHtml(s.guide)}</p><p><b>Why this approach:</b> ${escapeHtml(s.rationale)}</p><p class="guide-links">${s.refs.map(k=>`<a href="${REG[k].url}" target="_blank" rel="noreferrer">${escapeHtml(REG[k].label)}</a>`).join(" · ")}</p>`;$("guide").hidden=!r.guide;$("guideToggle").textContent=r.guide?"Hide facilitator guidance":"Reveal facilitator guidance";
  $("stageCriteria").innerHTML=s.criteria.map((c,i)=>`<div class="assessment-row"><label class="criterion"><span>${escapeHtml(c)}<small class="hint">Evidence example: ${escapeHtml(s.examples[i])}</small></span><select data-criterion="${i}" aria-label="Observation for ${escapeHtml(c)}"><option value="">Choose observation</option>${Object.entries(statusNames).map(([v,label])=>`<option value="${v}" ${r.criteria[i]===v?"selected":""}>${label}</option>`).join("")}</select></label></div>`).join("");
  $("injectBack").hidden=state.stage===0;$("observeNext").textContent=s.notify?"Record simulated contacts":state.stage===stages.length-1?"Go to closeout":"Next incident stage";renderLogs();renderStep();show("exerciseView");}
function renderStep(){if(state.step!==0)$("injectVideo").pause();substeps.forEach((id,i)=>$(id).hidden=i!==state.step);$("stageCounter").textContent=`Stage ${state.stage+1} of ${stages.length}`;const labels=["Incident inject","Team decision","Compare approaches","Facilitator observation","Simulated contacts"];$("stepCounter").textContent=labels[state.step];const max=stages[state.stage].notify?5:4;$("progressFill").style.width=`${((state.stage+(state.step+1)/max)/stages.length)*100}%`;window.scrollTo(0,0);}
function setStep(n){saveCurrent();state.step=n;renderStep();}
function nextStage(){saveCurrent();if(state.stage===stages.length-1){track(4);show("closeoutView");return;}track(state.stage+1);state.stage+=1;state.step=0;renderStage();}
function previousStage(){saveCurrent();if(state.stage===0)return;track(state.stage-1);state.stage-=1;state.step=stages[state.stage].notify?4:3;renderStage();}

$("openDetails").addEventListener("click",()=>show("detailsView"));$("detailsBack").addEventListener("click",()=>show("coverView"));$("contextBack").addEventListener("click",()=>show("detailsView"));
$("detailsForm").addEventListener("submit",e=>{e.preventDefault();state.config.site=$("siteName").value.trim();state.config.date=$("exerciseDate").value;state.config.facilitator=$("facilitatorName").value.trim();state.config.cyso=$("cysoName").value.trim();state.config.fso=$("fsoName").value.trim();state.config.participants=$("participants").value.split(/\n/).map(x=>x.trim()).filter(Boolean);show("contextView");});
$("contextForm").addEventListener("submit",e=>{e.preventDefault();state.config.vessel=$("vesselStatus").value.trim();state.config.system=$("affectedSystem").value.trim();state.config.authority=$("decisionAuthority").value.trim();if(!state.startedAt){state.startedAt=Date.now();state.phase=0;state.phaseSince=state.startedAt;}state.stage=0;state.step=0;renderStage();});
$("injectBack").addEventListener("click",previousStage);$("injectNext").addEventListener("click",()=>setStep(1));$("decisionBack").addEventListener("click",()=>setStep(0));
$("decisionNext").addEventListener("click",()=>{if(!$("teamDecision").value.trim()){alert("Record the team's decision before comparing approaches.");$("teamDecision").focus();return;}setStep(2);});
$("compareBack").addEventListener("click",()=>setStep(1));$("compareNext").addEventListener("click",()=>{if(!document.querySelector('input[name="approach"]:checked')){alert("Select the closest approach discussed.");return;}setStep(3);});
$("guideToggle").addEventListener("click",()=>{const r=state.responses[state.stage];r.guide=!r.guide;$("guide").hidden=!r.guide;$("guideToggle").textContent=r.guide?"Hide facilitator guidance":"Reveal facilitator guidance";});
$("observeBack").addEventListener("click",()=>setStep(2));$("observeNext").addEventListener("click",()=>{if([...document.querySelectorAll("#stageCriteria select")].some(el=>!el.value)){alert("Mark each observed action in the facilitator assessment view before moving on.");$("assessmentPrivate").open=true;return;}if(!$("stageNotes").value.trim()){alert("Complete the facilitator record, including performance, learning, critical gaps, and any N/A reasons.");$("stageNotes").focus();return;}if(stages[state.stage].notify)setStep(4);else nextStage();});
$("notifyBack").addEventListener("click",()=>setStep(3));$("notifyNext").addEventListener("click",()=>{if(!state.logs.length){alert("Record the CySO's simulated contact before moving on.");return;}nextStage();});
$("addLog").addEventListener("click",()=>{const who=$("logWho").value.trim(),to=$("logTo").value.trim(),time=$("logTime").value,facts=$("logFacts").value.trim();if(!who||!to||!time||!facts){alert("Record the person, recipient, simulated time, and essential facts.");return;}state.logs.push({who,to,time,method:$("logMethod").value.trim(),facts,unknown:$("logUnknown").value.trim()});["logWho","logTo","logTime","logMethod","logFacts","logUnknown"].forEach(id=>$(id).value="");renderLogs();});
$("logList").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.logs.splice(Number(b.dataset.remove),1);renderLogs();});
$("closeoutBack").addEventListener("click",()=>{track(stages.length-1);state.stage=stages.length-1;state.step=3;renderStage();});
$("closeoutForm").addEventListener("submit",e=>{e.preventDefault();if(!state.endedAt){track(null);state.endedAt=Date.now();state.phase=null;}renderSummary();show("reportView");});
$("reportBack").addEventListener("click",()=>{state.endedAt=null;state.phase=4;state.phaseSince=Date.now();show("closeoutView");});

function elapsed(){return state.durations.reduce((a,b)=>a+b,0);}
function uniqueParticipants(){const seen=new Set();return state.config.participants.filter(line=>{const name=line.split(/\s+[—–-]\s+/)[0].trim().toLowerCase();if(!name||seen.has(name))return false;seen.add(name);return true;});}
function renderSummary(){renderDebrief();const rows=stages.map((s,i)=>`<div><span>${escapeHtml(s.tag)} stage elapsed time</span><strong>${duration(state.durations[i])}</strong></div>`).join("");$("reportSummary").innerHTML=`<div><span>Version</span><strong>${VERSION}</strong></div><div><span>Started</span><strong>${escapeHtml(stamp(state.startedAt))}</strong></div><div><span>Finished</span><strong>${escapeHtml(stamp(state.endedAt))}</strong></div><div><span>Session elapsed time</span><strong>${duration(elapsed())}</strong></div>${rows}<div><span>Closeout elapsed time</span><strong>${duration(state.durations[4])}</strong></div><div><span>Independent performance</span><strong>${escapeHtml(scoreText())}</strong></div><div><span>Simulated contacts</span><strong>${state.logs.length}</strong></div><div><span>Participant signature lines</span><strong>${uniqueParticipants().length}</strong></div>`;}
function buildReport(){const c=state.config,line=v=>escapeHtml(v||"Not recorded"),value=id=>$(id).value.trim(),named=uniqueParticipants();const observations=stages.flatMap((s,i)=>s.criteria.map((label,j)=>`<tr><td>${escapeHtml(s.tag)}</td><td>${escapeHtml(label)}</td><td>${escapeHtml(statusNames[state.responses[i].criteria[j]]||"Not marked")}</td></tr>`)).join("");const contacts=state.logs.map(l=>`<tr><td>${line(l.time)}</td><td>${line(l.who)}</td><td>${line(l.to)}<br>${line(l.method)}</td><td>${line(l.facts)}<br><i>Unknowns / next action:</i> ${line(l.unknown)}</td></tr>`).join("");const stageRecords=stages.map((s,i)=>{const r=state.responses[i],chosen=r.option==="3"?"Different approach, documented in team decision":s.options[Number(r.option)];return `<div class="print-stage"><strong>${escapeHtml(s.tag)} · ${escapeHtml(s.title)}</strong><p><b>Team decision:</b> ${line(r.text)}</p><p><b>Approach discussed:</b> ${line(chosen)}</p><p class="facilitator-record-text"><b>Facilitator record:</b><br>${line(r.notes)}</p><p><b>Video:</b> inject-${i+1}.mp4</p><p><b>Response guidance:</b> ${escapeHtml(s.rationale)}</p></div>`;}).join("");
  $("printReport").innerHTML=`<div class="print-head"><div><small>VOPAK · TERMINAL CYBERSECURITY</small><h1>Incident Exercise Record</h1><p>${line(c.site)} · ${line(c.date)} · Version ${VERSION}</p></div><img src="assets/vopak-deepblue.png" alt="Vopak"></div><div class="print-note">SIMULATION ONLY · The exercise site made no agency contact, ServiceNow ticket, or operational change.</div><section class="print-section print-grid"><div><b>Facilitator:</b> ${line(c.facilitator)}</div><div><b>CySO:</b> ${line(c.cyso)}</div><div><b>FSO:</b> ${line(c.fso)}</div><div><b>Time zone:</b> ${line(timeZone)}</div><div><b>Started:</b> ${line(stamp(state.startedAt))}</div><div><b>Finished:</b> ${line(stamp(state.endedAt))}</div><div><b>Session elapsed time:</b> ${duration(elapsed())}</div></section><section class="print-section"><h2>Stage elapsed time</h2><table class="print-table"><thead><tr><th>Stage</th><th>Stage elapsed time</th></tr></thead><tbody>${stages.map((s,i)=>`<tr><td>${escapeHtml(s.tag)} · ${escapeHtml(s.title)}</td><td>${duration(state.durations[i])}</td></tr>`).join("")}<tr><td>Closeout</td><td>${duration(state.durations[4])}</td></tr></tbody></table><p class="print-foot">Elapsed wall time includes discussion, revisits, and any breaks while the session was open.</p></section><section class="print-section"><h2>Terminal context and objective</h2><p><b>Vessel or transfer:</b> ${line(c.vessel)} · <b>Affected function:</b> ${line(c.system)}</p><p><b>Operational authority:</b> ${line(c.authority)}</p><p>Facilitator-led exercise of communication and notification, coordination, resource availability, and response with active CySO participation. ${escapeHtml(REG.exercise.label)}.</p></section><section class="print-section"><h2>Participants</h2><p>${named.map(line).join(" · ")}</p></section><section class="print-section"><h2>Decision record</h2>${stageRecords}</section><section class="print-section page-break"><h2>Independent performance</h2><p>${escapeHtml(scoreText())} No speed points. This is an exercise performance assessment, not a compliance score.</p><table class="print-table"><thead><tr><th style="width:17%">Stage</th><th>Action</th><th style="width:21%">Observation</th></tr></thead><tbody>${observations}</tbody></table></section><section class="print-section"><h2>Simulated notification and handoff log</h2><table class="print-table"><thead><tr><th style="width:11%">Time</th><th style="width:17%">By</th><th style="width:22%">To and route</th><th>Message, uncertainty, next action</th></tr></thead><tbody>${contacts||'<tr><td colspan="4">No simulated contact recorded.</td></tr>'}</tbody></table></section><section class="print-section"><h2>Lessons and corrective action</h2><p><b>Worked well:</b> ${line(value("worked"))}</p><p><b>Gaps:</b> ${line(value("gaps"))}</p><p><b>Action:</b> ${line(value("action"))} · <b>Owner:</b> ${line(value("owner"))} · <b>Target:</b> ${line(value("due"))}</p><p><b>Facilitator conclusion:</b> ${line(value("conclusion"))}</p></section><section class="print-section"><h2>Participant acknowledgment</h2><p>Signature confirms participation and review of this simulated record. It is not a certification of compliance.</p><div class="signature-grid">${named.map(name=>`<div class="signature">${line(name)} · Signature / date</div>`).join("")}</div></section><p class="print-foot">Retain through the approved protected facility records process. ${escapeHtml(REG.records.label)} and ${escapeHtml(REG.facility.label)}. The exercise site stores no session data.</p>`;
}
$("videoReplay").addEventListener("click",()=>{const v=$("injectVideo");v.currentTime=0;v.play().catch(()=>{});});
$("printButton").addEventListener("click",()=>{buildReport();window.print();});
window.addEventListener("beforeunload",e=>{if(!state.startedAt)return;e.preventDefault();e.returnValue="";});

const sources=[
  [REG.exercise,"Annual exercise, tabletop format, communication, notification, coordination, resources, response, and substantial active CySO participation."],
  [REG.immediate,"Immediate reports to FBI, CISA for cyber incidents, and the COTP or representatives when evidence meets this provision."],
  [REG.definitions,"Includes a still-investigated incident that could reasonably lead to listed substantial or operational impacts."],
  [REG.nrc,"NRC without-delay route for a reportable cyber incident not reported under 33 CFR 6.16-1 (immediate notification), or for an entity not subject to that route."],
  [REG.cyso,"CySO designation and responsibility for coordination with security roles."],
  [REG.records,"Cybersecurity exercise records are created and maintained under facility recordkeeping requirements."],
  [REG.facility,"Facility exercise record content, retention, availability, and protection of electronic records."],
  [{label:"Vopak GIT CIS Guideline, Incident Response and Business Continuity",url:""},"Section 3 and Appendix A: Assess the Situation, Begin the Escalation, Continue the Operation. Use the current controlled copy for local IT and OT, GLAS P1, management, safe isolation, recovery, and ServiceNow procedures."],
  [{label:"Vopak Operational Technology Security Policy v1.2",url:""},"Section 5.2: incident management, communication, and practice of documented response actions. Confirm the current controlled version."],
  [{label:"Vopak Incident Classification, Reporting and Investigation Standard v8",url:""},"Sections 7.1 and 7.2: initial notification facts, potential severity, and subsequent recordkeeping. Confirm the current controlled version."]
];
const preparation=`<ol><li>Use the current approved facility and cybersecurity plans and incident response procedure.</li><li>Have the approved Vopak GLAS, ServiceNow, and external reporting routes available to the responsible roles.</li><li>Confirm the designated CySO, FSO, Operations lead, and local IT or OT Focal Point can participate.</li><li>Use a realistic terminal transfer or vessel context and record what participants actually demonstrate.</li><li>Save and sign the PDF, then retain it in the approved protected facility record system.</li></ol><div class="dialog-note">All calls, tickets, and operational actions are simulated. Do not enter credentials, contact numbers, sensitive architecture, or controlled plan text in this site.</div>`;
document.querySelectorAll("[data-panel]").forEach(button=>button.addEventListener("click",()=>{const prep=button.dataset.panel==="prepare";const points=button.dataset.panel==="points";$("dialogKicker").textContent=points?"Assessment method":prep?"Facilitator guidance":"Source map";$("dialogTitle").textContent=points?"Assessment & points":prep?"How to run this exercise":"Requirements and Vopak guidance";$("dialogBody").innerHTML=points?pointsHelp:prep?preparation:`<p>Use the approved facility plans and current controlled internal documents. This map is a learning aid.</p>${sources.map(([s,d])=>`<div class="source-entry"><strong>${s.url?`<a href="${s.url}" target="_blank" rel="noreferrer">${escapeHtml(s.label)}</a>`:escapeHtml(s.label)}</strong><p>${escapeHtml(d)}</p></div>`).join("")}`;$("infoDialog").showModal();}));
$("dialogClose").addEventListener("click",()=>$("infoDialog").close());

if(document.modelContext?.registerTool){try{const register=tool=>Promise.resolve(document.modelContext.registerTool(tool)).catch(()=>{});register({name:"read_exercise_state",title:"Read exercise state",description:"Read the current local facilitator stage and simulated contact count. No data is sent to a server.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){return {started:!!state.startedAt,stage:state.startedAt?stages[state.stage].tag:null,simulatedContacts:state.logs.length};}});register({name:"record_simulated_contact",title:"Record simulated contact",description:"Add a simulated reporting contact to the visible log. No person or agency is contacted.",inputSchema:{type:"object",properties:{who:{type:"string"},to:{type:"string"},time:{type:"string"},method:{type:"string"},facts:{type:"string"},unknown:{type:"string"}},required:["who","to","time","facts"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!state.startedAt)throw Error("Start the exercise first.");const l=input||{};for(const k of ["who","to","time","facts"])if(typeof l[k]!=="string"||!l[k].trim())throw Error(`Missing ${k}.`);if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(l.time))throw Error("Time must be HH:MM.");state.logs.push({who:l.who.trim().slice(0,80),to:l.to.trim().slice(0,100),time:l.time,method:String(l.method||"").slice(0,90),facts:l.facts.trim().slice(0,1000),unknown:String(l.unknown||"").slice(0,1000)});renderLogs();return {recorded:true,simulatedContacts:state.logs.length};}});}catch(_){}}

const pointsHelp = `<p>Assess 12 observable actions, three per inject, for a maximum of 24 points. Selecting an answer does not earn points. No points are awarded for speed.</p><ul><li><b>2 points:</b> demonstrated independently, with evidence.</li><li><b>1 point:</b> demonstrated after a prompt that supplies missing direction.</li><li><b>0 points:</b> not demonstrated or materially incorrect.</li><li><b>N/A:</b> excluded from the denominator with a recorded reason.</li></ul><p>Repeating the question or asking “why?” does not automatically reduce points. Use the criterion’s concrete evidence example in the facilitator assessment view.</p><p>Percentage = points earned ÷ applicable maximum × 100. For example, 18 ÷ 24 = 75%. If all actions are N/A, no percentage is calculated. Unassessed actions remain identified.</p><p>The results separate <b>Independent performance</b>, <b>Learning after discussion</b>, and <b>Critical gaps</b> requiring follow-up regardless of points. This is an exercise performance assessment, not a regulatory compliance score.</p><p>Detailed criteria and evidence examples stay in the facilitator assessment view until debrief. Judge the response before supplying missing direction.</p>`;
function score(){let earned=0,max=0,unassessed=0;state.responses.forEach(r=>r.criteria.forEach(v=>{if(v!=="na")max+=2;if(v==="demonstrated")earned+=2;if(v==="prompted")earned++;if(!v)unassessed++;}));return {earned,max,unassessed};}
function scoreText(){const x=score();return `${x.earned}/${x.max} applicable points${x.max?` (${Math.round(x.earned/x.max*100)}%)`:" (no applicable actions)"}${x.unassessed?` · ${x.unassessed} unassessed actions`:""}`;}
function renderDebrief(){$("debriefBody").innerHTML=`<h3>Independent performance</h3><p>${escapeHtml(scoreText())}</p>`+stages.map((s,i)=>{const r=state.responses[i];return `<div class="source-entry"><h3>${escapeHtml(s.tag)}</h3>${s.criteria.map((c,k)=>`<p><b>${escapeHtml(c)}</b><br>${escapeHtml(statusNames[r.criteria[k]]||"Not assessed")}</p>`).join("")}<p class="facilitator-record-text"><b>Facilitator record:</b><br>${escapeHtml(r.notes||"Not recorded")}</p><p><b>Response guidance:</b> ${escapeHtml(s.rationale)}</p></div>`;}).join("");}

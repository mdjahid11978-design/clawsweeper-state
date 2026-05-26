# ClawSweeper Dashboard

Generated from the durable state branch for [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper).

## Sweep Dashboard

Last source update: May 26, 2026, 13:44 UTC

### Fleet

| Metric | Count |
| --- | ---: |
| Covered repositories | 3 |
| Open review records | 1202 |
| Archived closed records | 286 |
| Fresh reviews, 7d | 1202 |
| Proposed closes awaiting apply | 17 |
| Work candidates awaiting promotion | 136 |
| Failed or stale reviews | 39 |

### Current Runs

| Repository | State | Updated | Run |
| --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | Review in progress | May 26, 2026, 13:37 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/26451420958) |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | Review in progress | May 26, 2026, 13:25 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/26450751916) |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | Review in progress | May 26, 2026, 01:27 UTC | [run](https://github.com/openclaw/clawsweeper/actions/runs/26427055137) |

### Repositories

| Repository | Open records | Archived | Fresh | Proposed closes | Work candidates | Failed/stale | Last review | Last close |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 1070 | 273 | 1070 | 17 | 123 | 38 | May 26, 2026, 13:44 UTC | May 26, 2026, 13:14 UTC |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | 117 | 6 | 117 | 0 | 9 | 1 | May 26, 2026, 07:17 UTC | May 26, 2026, 01:42 UTC |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | 15 | 7 | 15 | 0 | 4 | 0 | May 26, 2026, 04:34 UTC | May 26, 2026, 04:46 UTC |

### Work Candidates

| Repository | Item | Title | Priority | Reviewed | Report |
| --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#79910](https://github.com/openclaw/openclaw/pull/79910) | fix(sessions): recover store from backup and tmp artifacts | high | May 26, 2026, 10:43 UTC | [records/openclaw-openclaw/items/79910.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/79910.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86814](https://github.com/openclaw/openclaw/issues/86814) | Stale lock recovery ignores createdAt when recorded PID is reused | high | May 26, 2026, 08:17 UTC | [records/openclaw-openclaw/items/86814.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86814.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86724](https://github.com/openclaw/openclaw/pull/86724) | fix(message-tool): hydrate attachments[] on reply (and other single-attachment actions) | high | May 26, 2026, 06:58 UTC | [records/openclaw-openclaw/items/86724.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86724.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86780](https://github.com/openclaw/openclaw/issues/86780) | [Bug]: `openclaw status --json` infinite statx loop — 100% CPU, never exits (2026.5.18 & 5.22) | high | May 26, 2026, 06:57 UTC | [records/openclaw-openclaw/items/86780.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86780.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86779](https://github.com/openclaw/openclaw/issues/86779) | [Bug]: Gateway startup fails — mergeScopedSearchConfig injects shape that validator rejects (tools.web.sear... | high | May 26, 2026, 06:51 UTC | [records/openclaw-openclaw/items/86779.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86779.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#80596](https://github.com/openclaw/openclaw/pull/80596) | Expose transcript update emitter to plugins | high | May 26, 2026, 05:05 UTC | [records/openclaw-openclaw/items/80596.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/80596.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86758](https://github.com/openclaw/openclaw/issues/86758) | Codex dynamic-tool RPC timeout (30s hardcoded) breaks session_status and other enumeration-heavy MCP tools | high | May 26, 2026, 04:59 UTC | [records/openclaw-openclaw/items/86758.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86758.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86729](https://github.com/openclaw/openclaw/pull/86729) | fix(gateway): add canvas commands to macOS node platform allowlist | high | May 26, 2026, 02:44 UTC | [records/openclaw-openclaw/items/86729.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86729.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86688](https://github.com/openclaw/openclaw/issues/86688) | Gateway crashes with uncaught ENETDOWN inside SSRF guard's outbound connect; macOS launchd silently parks t... | high | May 26, 2026, 00:55 UTC | [records/openclaw-openclaw/items/86688.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86688.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86669](https://github.com/openclaw/openclaw/issues/86669) | [Bug]: openclaw openai-compat /v1/chat/completions strips chat_template_kwargs entirely on vLLM/Nemotron —... | high | May 25, 2026, 23:36 UTC | [records/openclaw-openclaw/items/86669.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86669.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86635](https://github.com/openclaw/openclaw/issues/86635) | [Bug]: Provider-qualified default model resolution eagerly builds alias index and can block gateway event l... | high | May 25, 2026, 21:10 UTC | [records/openclaw-openclaw/items/86635.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86635.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#85909](https://github.com/openclaw/openclaw/pull/85909) | fix(codex): honor yolo app-server approval policy | high | May 25, 2026, 21:03 UTC | [records/openclaw-openclaw/items/85909.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/85909.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86261](https://github.com/openclaw/openclaw/pull/86261) | fix(skills): sync plugin skills to sandbox workspace | high | May 25, 2026, 20:19 UTC | [records/openclaw-openclaw/items/86261.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86261.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway container restart loop when OPENCLAW_SANDBOX=1 and OPENCLAW_HOME=/mnt/... | high | May 25, 2026, 19:17 UTC | [records/openclaw-openclaw/items/86612.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86612.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86592](https://github.com/openclaw/openclaw/issues/86592) | Inbound user messages are not persisted to session JSONL when the agent attempt throws | high | May 25, 2026, 18:05 UTC | [records/openclaw-openclaw/items/86592.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86592.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86586](https://github.com/openclaw/openclaw/issues/86586) | Runtime: parallel sessions_send can orphan faster callee pingback when sibling call is slow | high | May 25, 2026, 17:35 UTC | [records/openclaw-openclaw/items/86586.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86586.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86545](https://github.com/openclaw/openclaw/issues/86545) | [Bug]: Cron isolated jobs fail Discord delivery with "SecretRefs not resolved against runtime snapshot" aft... | high | May 25, 2026, 15:52 UTC | [records/openclaw-openclaw/items/86545.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86545.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86550](https://github.com/openclaw/openclaw/issues/86550) | [Bug]: | high | May 25, 2026, 15:44 UTC | [records/openclaw-openclaw/items/86550.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86550.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86518](https://github.com/openclaw/openclaw/issues/86518) | doctor unconditionally prompts 'Restart gateway service now?' for any running gateway, causing post-update... | high | May 25, 2026, 14:31 UTC | [records/openclaw-openclaw/items/86518.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86518.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86509](https://github.com/openclaw/openclaw/issues/86509) | Regression on v2026.5.22: event-loop starvation returns (87s session-lock phase, 31s loop delay) — ref #80695 | high | May 25, 2026, 13:57 UTC | [records/openclaw-openclaw/items/86509.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/items/86509.md) |

### Recently Closed

| Repository | Item | Title | Reason | Closed | Report |
| --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86908](https://github.com/openclaw/openclaw/pull/86908) | fix(issue): resolve #86791 [Bug]: Plugin metadata hot paths repeat installed manifest f | low_signal_unmergeable_pr | May 26, 2026, 13:14 UTC | [records/openclaw-openclaw/closed/86908.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86908.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86902](https://github.com/openclaw/openclaw/pull/86902) | fix(issue): resolve #86887 [Bug]: Tool Search catalog is rebuilt on every embedded agen | low_signal_unmergeable_pr | May 26, 2026, 13:14 UTC | [records/openclaw-openclaw/closed/86902.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86902.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86906](https://github.com/openclaw/openclaw/pull/86906) | fix(issue): resolve #86819 [Bug]: /context detail shows ~62k untracked provider/runtime | low_signal_unmergeable_pr | May 26, 2026, 13:14 UTC | [records/openclaw-openclaw/closed/86906.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86906.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86907](https://github.com/openclaw/openclaw/pull/86907) | fix(issue): resolve #86811 [Bug]: [Bug]: WebChat dashboard freezes during tool calls, W | low_signal_unmergeable_pr | May 26, 2026, 13:12 UTC | [records/openclaw-openclaw/closed/86907.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86907.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86905](https://github.com/openclaw/openclaw/pull/86905) | fix(issue): resolve #86820 [Bug]: Codex OAuth compaction falls back to direct OpenAI AP | implemented_on_main | May 26, 2026, 13:11 UTC | [records/openclaw-openclaw/closed/86905.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86905.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86903](https://github.com/openclaw/openclaw/pull/86903) | fix(issue): resolve #86880 [Bug]: Context Overflow Bug With OpenRouter Models (Latest V | low_signal_unmergeable_pr | May 26, 2026, 13:11 UTC | [records/openclaw-openclaw/closed/86903.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86903.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86897](https://github.com/openclaw/openclaw/issues/86897) | [Bug]: Stop button stuck in 'active run' state after every assistant turn (chatRunStatus desync) | implemented_on_main | May 26, 2026, 13:07 UTC | [records/openclaw-openclaw/closed/86897.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86897.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86899](https://github.com/openclaw/openclaw/pull/86899) | fix: chat/message bug sweep — history, Discord reply, build, session resolve | low_signal_unmergeable_pr | May 26, 2026, 13:07 UTC | [records/openclaw-openclaw/closed/86899.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86899.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86896](https://github.com/openclaw/openclaw/issues/86896) | [Bug]: WebChat session status stuck "in progress" — WebSocket state push missing (2026.5.24-beta.2) | implemented_on_main | May 26, 2026, 13:00 UTC | [records/openclaw-openclaw/closed/86896.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86896.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86858](https://github.com/openclaw/openclaw/issues/86858) | Gateway high CPU/memory usage with 8 agents and 7 Feishu channels (2026.5.22) | duplicate_or_superseded | May 26, 2026, 10:31 UTC | [records/openclaw-openclaw/closed/86858.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86858.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86817](https://github.com/openclaw/openclaw/pull/86817) | fix(agents): recover stale OpenAI Responses continuation state | duplicate_or_superseded | May 26, 2026, 10:08 UTC | [records/openclaw-openclaw/closed/86817.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86817.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86846](https://github.com/openclaw/openclaw/issues/86846) | [Bug]: auth phase takes ~8.5s on Windows vs ~1-2s on Mac (same version, same model) | duplicate_or_superseded | May 26, 2026, 09:44 UTC | [records/openclaw-openclaw/closed/86846.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86846.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86838](https://github.com/openclaw/openclaw/pull/86838) | fix(issue): resolve #86819 [Bug]: /context detail shows ~62k untracked provider/runtime | low_signal_unmergeable_pr | May 26, 2026, 09:23 UTC | [records/openclaw-openclaw/closed/86838.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86838.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86841](https://github.com/openclaw/openclaw/pull/86841) | fix(issue): resolve #86791 [Bug]: Plugin metadata hot paths repeat installed manifest f | low_signal_unmergeable_pr | May 26, 2026, 09:13 UTC | [records/openclaw-openclaw/closed/86841.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86841.md) |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86844](https://github.com/openclaw/openclaw/pull/86844) | fix(issue): resolve #86786 [Bug]: Subagent registry hot reads clone the persisted run m | low_signal_unmergeable_pr | May 26, 2026, 09:13 UTC | [records/openclaw-openclaw/closed/86844.md](https://github.com/openclaw/clawsweeper-state/blob/state/records/openclaw-openclaw/closed/86844.md) |

<details>
<summary>Recently Reviewed</summary>

| Repository | Item | Title | Outcome | Status | Reviewed |
| --- | --- | --- | --- | --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86614](https://github.com/openclaw/openclaw/pull/86614) | Preserve xAI usage limit errors in local TUI | keep_open / kept_open | complete | May 26, 2026, 13:44 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86914](https://github.com/openclaw/openclaw/issues/86914) | [Feature]: Telegram: option to keep prior bot message before exec approval prompt | keep_open / kept_open | complete | May 26, 2026, 13:44 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86913](https://github.com/openclaw/openclaw/pull/86913) | fix(gateway): expose restart pending state | keep_open / kept_open | complete | May 26, 2026, 13:43 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86915](https://github.com/openclaw/openclaw/pull/86915) | docs(doctor): clarify unknown lint selections | keep_open / kept_open | complete | May 26, 2026, 13:40 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#75727](https://github.com/openclaw/openclaw/pull/75727) | fix(gateway): render codex inline media once | keep_open / kept_open | complete | May 26, 2026, 13:40 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#77017](https://github.com/openclaw/openclaw/pull/77017) | feat(ui): add generated image actions | keep_open / kept_open | complete | May 26, 2026, 13:39 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86270](https://github.com/openclaw/openclaw/pull/86270) | Fix stale approval prompts in Control UI | keep_open / kept_open | complete | May 26, 2026, 13:39 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86848](https://github.com/openclaw/openclaw/pull/86848) | fix(auto-reply): suppress repeated silent tokens | keep_open / kept_open | complete | May 26, 2026, 13:37 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86889](https://github.com/openclaw/openclaw/pull/86889) | fix(gateway): drop pre-session-start subagent_announce pairs from chat.history hydration | keep_open / kept_open | complete | May 26, 2026, 13:36 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86732](https://github.com/openclaw/openclaw/pull/86732) | fix(agents): attribute embedded tool logs to channels | keep_open / kept_open | complete | May 26, 2026, 13:36 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86912](https://github.com/openclaw/openclaw/pull/86912) | fix(auto-reply): bound pendingFinalDelivery heartbeat replay by attempt cap and TTL | close / kept_open | complete | May 26, 2026, 13:35 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#80388](https://github.com/openclaw/openclaw/pull/80388) | feat(plugins): add Control UI entry points | keep_open / kept_open | complete | May 26, 2026, 13:33 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86479](https://github.com/openclaw/openclaw/pull/86479) | refactor: centralize inbound supplemental context | keep_open / kept_open | complete | May 26, 2026, 13:30 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86755](https://github.com/openclaw/openclaw/pull/86755) | test(tasks): cover task domain view mappers | keep_open / kept_open | complete | May 26, 2026, 13:29 UTC |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | [#86359](https://github.com/openclaw/openclaw/pull/86359) | fix(exec): hide unavailable durable approval actions | keep_open / kept_open | complete | May 26, 2026, 13:28 UTC |

</details>

### Audit Health

| Repository | Status | Last audit | Missing eligible | Stale records | Protected proposed | Scan complete |
| --- | --- | --- | ---: | ---: | ---: | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | _unknown_ | unknown | 0 | 0 | 0 | unknown |
| [openclaw/clawhub](https://github.com/openclaw/clawhub) | _unknown_ | unknown | 0 | 0 | 0 | unknown |
| [openclaw/clawsweeper](https://github.com/openclaw/clawsweeper) | _unknown_ | unknown | 0 | 0 | 0 | unknown |


## Repair Dashboard

Last source update: May 26, 2026, 03:05 UTC

State: Fix execution needs repair

| Metric | Count | Rate |
| --- | ---: | ---: |
| Latest clusters reviewed | 26 | 100% |
| Run attempts archived | 43 | audit |
| Latest successful clusters | 26 | 100.0% |
| Latest failed clusters | 0 | 0.0% |
| Latest cancelled clusters | 0 | 0.0% |
| Needs-human clusters | 1 | 3.8% |
| Fix actions failed | 3 | 7.0% |
| Fix actions blocked | 12 | 27.9% |
| Completed close actions | 0 | 0.0% |
| Completed merge actions | 0 | 0.0% |
| Blocked mutation attempts | 23 | 100.0% |
| Skipped mutation attempts | 0 | 0.0% |

### Clusters Needing Inspection

| Cluster | State | Reason | Report | Run |
| --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-84056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84056.md) | fix failed | source PR #84056 is closed | [automerge-openclaw-openclaw-84056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84056.md) | [26429268020](https://github.com/openclaw/clawsweeper/actions/runs/26429268020) |
| [issue-openclaw-clawsweeper-202](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-202.md) | needs human | Maintainer decision needed for https://github.com/openclaw/clawsweeper/issues/202: approve or narrow the durable `@clawsweeper visualize` command/c... | [issue-openclaw-clawsweeper-202](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-202.md) | [26426098108](https://github.com/openclaw/clawsweeper/actions/runs/26426098108) |
| [automerge-openclaw-openclaw-84220](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84220.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-84220](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84220.md) | [26421027636](https://github.com/openclaw/clawsweeper/actions/runs/26421027636) |
| [automerge-openclaw-openclaw-86598](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86598.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-86598](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86598.md) | [26420343422](https://github.com/openclaw/clawsweeper/actions/runs/26420343422) |
| [automerge-openclaw-openclaw-80620](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-80620.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-80620](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-80620.md) | [26420138520](https://github.com/openclaw/clawsweeper/actions/runs/26420138520) |
| [automerge-openclaw-openclaw-86017](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86017.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-86017](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86017.md) | [26414006151](https://github.com/openclaw/clawsweeper/actions/runs/26414006151) |
| [automerge-openclaw-openclaw-86487](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86487.md) | fix failed | Codex /review timed out after 136021ms | [automerge-openclaw-openclaw-86487](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86487.md) | [26406499744](https://github.com/openclaw/clawsweeper/actions/runs/26406499744) |
| [automerge-openclaw-openclaw-86327](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86327.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-86327](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86327.md) | [26404091820](https://github.com/openclaw/clawsweeper/actions/runs/26404091820) |
| [automerge-openclaw-openclaw-85733](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85733.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-85733](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85733.md) | [26404081623](https://github.com/openclaw/clawsweeper/actions/runs/26404081623) |
| [automerge-openclaw-openclaw-86286](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86286.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-86286](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86286.md) | [26404452501](https://github.com/openclaw/clawsweeper/actions/runs/26404452501) |
| [automerge-openclaw-openclaw-85271](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85271.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-85271](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85271.md) | [26402664504](https://github.com/openclaw/clawsweeper/actions/runs/26402664504) |
| [automerge-openclaw-openclaw-86177](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86177.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-86177](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86177.md) | [26402609918](https://github.com/openclaw/clawsweeper/actions/runs/26402609918) |
| [automerge-openclaw-openclaw-86282](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86282.md) | fix failed | Codex fix worker timed out after 1200000ms | [automerge-openclaw-openclaw-86282](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86282.md) | [26400863455](https://github.com/openclaw/clawsweeper/actions/runs/26400863455) |
| [automerge-openclaw-openclaw-86037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86037.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-86037](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86037.md) | [26400491095](https://github.com/openclaw/clawsweeper/actions/runs/26400491095) |
| [automerge-openclaw-openclaw-84338](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84338.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-84338](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84338.md) | [26398324698](https://github.com/openclaw/clawsweeper/actions/runs/26398324698) |
| [automerge-openclaw-openclaw-85348](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85348.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-85348](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85348.md) | [26394925460](https://github.com/openclaw/clawsweeper/actions/runs/26394925460) |
| [automerge-openclaw-openclaw-81153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-81153.md) | repair_contributor_branch blocked | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [automerge-openclaw-openclaw-81153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-81153.md) | [26382915858](https://github.com/openclaw/clawsweeper/actions/runs/26382915858) |
| [automerge-openclaw-openclaw-86287](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86287.md) | repair_contributor_branch blocked | source PR #86287 source PR branch is a fork with maintainer_can_modify=false | [automerge-openclaw-openclaw-86287](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86287.md) | [26382886146](https://github.com/openclaw/clawsweeper/actions/runs/26382886146) |
| [issue-openclaw-clawsweeper-191](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-191.md) | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-clawsweeper-191](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-191.md) | [26380890266](https://github.com/openclaw/clawsweeper/actions/runs/26380890266) |
| [issue-openclaw-clawsweeper-189](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-189.md) | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-clawsweeper-189](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-189.md) | [26376691114](https://github.com/openclaw/clawsweeper/actions/runs/26376691114) |
| [automerge-openclaw-clawsweeper-188](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-188.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-clawsweeper-188](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-clawsweeper-188.md) | [26374855316](https://github.com/openclaw/clawsweeper/actions/runs/26374855316) |
| [issue-openclaw-clawsweeper-187](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-187.md) | execute_fix blocked | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [issue-openclaw-clawsweeper-187](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-187.md) | [26374241280](https://github.com/openclaw/clawsweeper/actions/runs/26374241280) |
| [automerge-openclaw-openclaw-85491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85491.md) | merge_canonical blocked | job does not allow merge | [automerge-openclaw-openclaw-85491](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85491.md) | [26372149009](https://github.com/openclaw/clawsweeper/actions/runs/26372149009) |

### Fix Failure Queue

| Cluster | Status | Target | Branch/PR | Reason | Run |
| --- | --- | --- | --- | --- | --- |
| [automerge-openclaw-openclaw-84056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84056.md) | failed |  |  | source PR #84056 is closed | [26429268020](https://github.com/openclaw/clawsweeper/actions/runs/26429268020) |
| [automerge-openclaw-openclaw-86598](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86598.md) | blocked | [#86598](https://github.com/openclaw/openclaw/pull/86598) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26420343422](https://github.com/openclaw/clawsweeper/actions/runs/26420343422) |
| [automerge-openclaw-openclaw-80620](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-80620.md) | blocked | [#80620](https://github.com/openclaw/openclaw/pull/80620) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26420138520](https://github.com/openclaw/clawsweeper/actions/runs/26420138520) |
| [automerge-openclaw-openclaw-86487](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86487.md) | failed |  |  | Codex /review timed out after 136021ms | [26406499744](https://github.com/openclaw/clawsweeper/actions/runs/26406499744) |
| [automerge-openclaw-openclaw-86487](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86487.md) | blocked |  |  | Codex /review timed out after 136021ms | [26406499744](https://github.com/openclaw/clawsweeper/actions/runs/26406499744) |
| [automerge-openclaw-openclaw-86286](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86286.md) | blocked | [#86286](https://github.com/openclaw/openclaw/pull/86286) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26404452501](https://github.com/openclaw/clawsweeper/actions/runs/26404452501) |
| [automerge-openclaw-openclaw-85271](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-85271.md) | blocked | [#85271](https://github.com/openclaw/openclaw/pull/85271) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26402664504](https://github.com/openclaw/clawsweeper/actions/runs/26402664504) |
| [automerge-openclaw-openclaw-86177](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86177.md) | blocked | [#86177](https://github.com/openclaw/openclaw/pull/86177) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26402609918](https://github.com/openclaw/clawsweeper/actions/runs/26402609918) |
| [automerge-openclaw-openclaw-86282](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86282.md) | failed |  |  | Codex fix worker timed out after 1200000ms | [26400863455](https://github.com/openclaw/clawsweeper/actions/runs/26400863455) |
| [automerge-openclaw-openclaw-86282](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86282.md) | blocked |  |  | Codex fix worker timed out after 1200000ms | [26400863455](https://github.com/openclaw/clawsweeper/actions/runs/26400863455) |
| [automerge-openclaw-openclaw-81153](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-81153.md) | blocked | [#81153](https://github.com/openclaw/openclaw/pull/81153) |  | GitHub rejected the repair branch push because it updates workflow files and the ClawSweeper app token does not have workflows permission | [26382915858](https://github.com/openclaw/clawsweeper/actions/runs/26382915858) |
| [automerge-openclaw-openclaw-86287](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-86287.md) | blocked | [#86287](https://github.com/openclaw/openclaw/pull/86287) |  | source PR #86287 source PR branch is a fork with maintainer_can_modify=false | [26382886146](https://github.com/openclaw/clawsweeper/actions/runs/26382886146) |
| [issue-openclaw-clawsweeper-191](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-191.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [26380890266](https://github.com/openclaw/clawsweeper/actions/runs/26380890266) |
| [issue-openclaw-clawsweeper-189](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-189.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [26376691114](https://github.com/openclaw/clawsweeper/actions/runs/26376691114) |
| [issue-openclaw-clawsweeper-187](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/issue-openclaw-clawsweeper-187.md) | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLAWSWEEPER_ALLOW_BROAD_FIX_ARTIFACTS=1 | [26374241280](https://github.com/openclaw/clawsweeper/actions/runs/26374241280) |

### Top Blocked Reasons

| Reason | Latest count | Example cluster |
| --- | ---: | --- |
| job does not allow merge | 17 | [automerge-openclaw-openclaw-84056](https://github.com/openclaw/clawsweeper-state/blob/state/results/openclaw/automerge-openclaw-openclaw-84056.md) |

### Latest Repair Closures

| Target | Action | Title | Closed | Cluster | Report | Run |
| --- | --- | --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |  |


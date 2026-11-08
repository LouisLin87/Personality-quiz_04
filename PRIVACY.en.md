# Self Explorer V4: your data

## Result images

Save result image creates a PNG on your device without a new cloud request. It includes your type or tied/insufficient status, six area scores, question count, and observations. It excludes recovery codes, credentials, exact completion times, individual responses, and your own notes. Check that you want to share the displayed type and scores before posting the downloaded image. Preview object URLs remain on this page and are released after closing.

You can take the quiz without signing in. Choose **Start with local saving only** if you want your answers and results to stay in this browser. The Chinese and English interfaces use the same scoring rules. Switching language changes the displayed wording, not your answers or scores.

## What stays in this browser

Your question order, progress, completed results, saved notes, and unfinished note drafts use `demonward_panda_v4_wording_94_local`. Your language choice uses `demonward_panda_v4_locale_v1`; sound on/off uses `demonward_panda_v4_input_sound_audio_v1`. Language and sound preferences contain no answers or sign-in credentials. Clearing this edition's quiz records keeps those preferences; your browser's site-data controls can remove them too. No V3 storage is read or written.

Choosing Next saves the current note. Collapsing the note field keeps its text; clearing it and choosing Next removes that local note. Sound is bundled with the site and doesn't record audio or contact its original asset source.

## Automatic completion summaries: a separate choice

If you choose **Agree to automatic summaries and start**, each completed section sends a summary to the owner's private Google spreadsheet. A private archive or recovery code is not required for this summary.

The summary includes a quiz ID, dates, section, question count, six area scores and answer-coverage status, possible types, versions, question order, life context, and consent time. It excludes your name, email, individual answers, and note text. It is used for quiz statistics and improvements.

Pending summaries, consent, and save receipts use `demonward_panda_v4_wording_94_statistics`, without private-archive credentials. A failed request stays pending and can be retried when you're online or choose Try saving again. “Saved” appears only after the receiver confirms it. Repeated sends for the same quiz/section don't add duplicate rows. Refreshing can retry summaries you already agreed to save; it doesn't opt older results in.

You can separately agree to save an older result's summary on its results page. Deleting local data or a private archive doesn't automatically remove these statistics rows. Ask the owner to remove a summary using its quiz ID. Current summary rows are scheduled for removal 365 days after receipt; Google version history and separate backups follow the owner's policies.

## Private recovery: results and notes have different consent

Creating a private archive lets you recover result summaries across devices. While you're signed in, new completed results and section feedback save automatically. Summaries include dates, scores, question counts, versions, sections, question order, life context, and any retake baseline. They do not include individual answer choices.

**Saving note text is a separate, manual choice.** After you agree on the results page, saved note text, situation, question ID, relationship to the main answer, selected meaning, confirmations, extra-point selection, and rule version are sent with the related result summary. The server calculates the extra point again. Unfinished drafts aren't sent, and local editing doesn't automatically overwrite cloud text.

Notes are displayed as text, not executed as HTML, spreadsheet formulas, or instructions. No third-party AI analyzes them. Please leave out names, contact details, and other unnecessary private information.

## Recovery codes and sign-in

The browser generates a random recovery code and temporary session credential and sends them in HTTPS request bodies to the dedicated Apps Script. The receiver stores SHA-256 hashes. Your code is shown once. Anyone with it can read or delete the archive, so keep it private. Lost codes cannot be recovered for you.

Session credentials stay only in the current page's memory, for up to 12 hours. They are not stored in the URL, localStorage, sessionStorage, or cookies. Refreshing or using another device requires the recovery code again. Local progress and notes can still be resumed. A recovered summary has no individual answers, so it can't resume an unfinished quiz.

This is a pseudonymous archive, not a guarantee of untraceable anonymity. The application doesn't ask for your name, email, or device fingerprint and doesn't itself log IP addresses or user-agent strings. Hosting providers and Google maintain their own platform logs under their policies.

## Downloads and deletion

Main JSON/CSV exports exclude note text. Including individual answers in a download is a separate choice. The dedicated notes JSON contains your text, situation, confirmations, and extra-point check; keep downloaded files safe.

Editing a recovered note creates local content. Signing out removes the cloud list from the page but doesn't erase local edits. Deleting a local note and removing its cloud copy are separate actions.

Removing cloud notes clears their text and confirmations from the current table while keeping your result, local text, and a revision marker to prevent old requests restoring them. Deleting a private archive removes its current results, notes, credential hashes, and sessions, across all questionnaire editions.

Clearing current cells doesn't guarantee removal from Google version history or backups the owner created. The owner manages those retention policies. Local and downloaded copies must also be deleted separately. [Google explains version history here.](https://support.google.com/docs/answer/190843)

## Retention and limits

Inactive private archives are removed after 365 days, through a successful API action or the configured daily cleanup. Google outages, quotas, version history, and separately maintained backups are outside the application's guarantees. The site owner should provide a contact method and explain backup retention and deletion policies before public promotion.

The current V4 uses the existing, owner-authorized Google receiver. You can keep everything local by declining automatic summaries and not enabling private recovery. Creating a private archive can include the current completed summary if you select that option; it doesn't also upload all previous local results unless you choose to sync them.

Skipped answers mean “this doesn't fit” or “I can't tell,” not “both sides are equal.” Summaries include answered/skipped counts and too-few-answers status, without individual skip positions.

## Editions and language

The revised beta.9.4 questionnaire keeps its own local records. The earlier Chinese edition remains available through its separate link and storage key. Your recovery code works across editions, but their records are listed separately and different questionnaires aren't compared directly. Deleting a private archive deletes all its editions; deleting this edition locally doesn't delete the earlier edition's local data.

The bilingual update keeps beta.9.4's questionnaire IDs, scoring, record format, and Google payloads. Language is a display preference and is not added as a new cloud-record field. This English wording has not been psychometrically validated for equivalence with Chinese. Scores are self-exploration aids, not diagnoses or type probabilities.

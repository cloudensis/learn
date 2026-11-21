/**
 * ワークショップで公開リンクを集めるフォームと、提出一覧のリンク。
 * 開催回ごとに差し替え、終わったら undefined に戻して受付終了の表示にする。
 *
 * 公開前に確かめること:
 * - スプレッドシートの共有設定は「閲覧者」にする（編集者にしない）
 * - フォームで集めるのは公開リンクだけにし、名前や学校名などは集めない
 */
export const submission: { formUrl?: string; listUrl?: string } = {
	formUrl: undefined,
	listUrl: undefined,
};
